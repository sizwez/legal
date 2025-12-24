
import React, { useState, useRef, useEffect } from 'react';
import { streamLegalAssistant } from '../services/geminiService';
import { ChatMessage } from '../types';

interface ChatInterfaceProps {
  initialMessage?: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ initialMessage }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: "Hello! I'm your LegalLink SA assistant. I can help you with SASSA grants, UIF, Home Affairs processes, and more. What can I help you with today?" 
    }
  ]);
  const [input, setInput] = useState(initialMessage || '');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (initialMessage) {
        handleSend(initialMessage);
    }
  }, []);

  const handleSend = async (textToSend?: string) => {
    const messageText = textToSend || input;
    if (!messageText.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: messageText };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({ role: m.role, text: m.text }));
    let assistantMsg: ChatMessage = { role: 'model', text: '', links: [], isStreaming: true };
    
    setMessages(prev => [...prev, assistantMsg]);

    try {
      const stream = streamLegalAssistant(messageText, history);
      let fullText = "";
      let allLinks: { title: string; uri: string }[] = [];

      for await (const chunk of stream) {
        fullText += chunk.text;
        if (chunk.links.length > 0) {
            allLinks = [...new Set([...allLinks, ...chunk.links])];
        }
        setMessages(prev => {
          const newMsgs = [...prev];
          newMsgs[newMsgs.length - 1] = { 
            ...assistantMsg, 
            text: fullText, 
            links: allLinks 
          };
          return newMsgs;
        });
      }
    } catch (e) {
      setMessages(prev => {
        const newMsgs = [...prev];
        newMsgs[newMsgs.length - 1] = { role: 'model', text: 'Sorry, I lost connection. Please try again.' };
        return newMsgs;
      });
    } finally {
      setIsLoading(false);
      setMessages(prev => {
        const newMsgs = [...prev];
        if (newMsgs[newMsgs.length - 1]) {
            newMsgs[newMsgs.length - 1].isStreaming = false;
        }
        return newMsgs;
      });
    }
  };

  return (
    <div className="flex flex-col h-[650px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-5 text-white flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-white/10 p-2.5 rounded-2xl mr-4 backdrop-blur-sm border border-white/10">
            <i className="fas fa-robot text-lg"></i>
          </div>
          <div>
            <h3 className="font-bold text-lg tracking-tight">LegalLink AI</h3>
            <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                <p className="text-xs text-blue-100 font-medium uppercase tracking-wider">Live & Grounded</p>
            </div>
          </div>
        </div>
        <button className="text-white/60 hover:text-white transition-colors">
            <i className="fas fa-ellipsis-v"></i>
        </button>
      </div>

      <div className="flex-grow overflow-y-auto p-6 space-y-6 bg-[#fdfdfd]">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
            <div className={`max-w-[85%] relative rounded-2xl p-4 shadow-sm ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
            }`}>
              <p className="text-sm md:text-base whitespace-pre-wrap leading-relaxed">{msg.text}</p>
              
              {msg.links && msg.links.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-50">
                  <p className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-[0.1em]">Official Sources</p>
                  <div className="flex flex-wrap gap-2">
                    {msg.links.map((link, lIdx) => (
                      <a 
                        key={lIdx} 
                        href={link.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[11px] bg-blue-50 text-blue-700 font-semibold px-3 py-1.5 rounded-full hover:bg-blue-100 transition-all border border-blue-100 flex items-center"
                      >
                        <i className="fas fa-external-link-alt mr-1.5 text-[9px]"></i>
                        {link.title.length > 25 ? link.title.substring(0, 25) + '...' : link.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
              {msg.isStreaming && (
                <span className="inline-block w-1.5 h-4 bg-blue-400 ml-1 animate-pulse vertical-middle"></span>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-5 bg-white border-t border-gray-50">
        <div className="flex items-center bg-gray-50 rounded-2xl px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:bg-white transition-all border border-gray-100">
          <button className="text-gray-400 hover:text-blue-600 p-2 transition-colors">
            <i className="fas fa-paperclip"></i>
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Describe your legal query..."
            className="flex-grow bg-transparent border-none px-3 py-3 text-sm md:text-base focus:ring-0 outline-none text-gray-700 placeholder-gray-400"
          />
          <button
            onClick={() => handleSend()}
            disabled={isLoading || !input.trim()}
            className={`p-3 rounded-xl transition-all flex items-center justify-center w-11 h-11 ${
                isLoading || !input.trim() 
                ? 'bg-gray-200 text-gray-400' 
                : 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95'
            }`}
          >
            <i className={`fas ${isLoading ? 'fa-spinner fa-spin' : 'fa-arrow-up'}`}></i>
          </button>
        </div>
        <div className="mt-3 flex items-center justify-center space-x-4 text-[10px] text-gray-400 font-medium uppercase tracking-wider">
            <span className="flex items-center"><i className="fas fa-shield-alt mr-1.5 text-blue-500"></i> Secure</span>
            <span className="flex items-center"><i className="fas fa-check-circle mr-1.5 text-emerald-500"></i> Verifiable</span>
            <span className="flex items-center"><i className="fas fa-search mr-1.5 text-amber-500"></i> Live Data</span>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
