
import React, { useState } from 'react';
import Layout from './components/Layout';
import CategoryGrid from './components/CategoryGrid';
import ChatInterface from './components/ChatInterface';
import OfficeFinder from './components/OfficeFinder';
import SubscriptionPlans from './components/SubscriptionPlans';
import FormVault from './components/FormVault';
import ApplicationTracker from './components/ApplicationTracker';
import { GuideCategory } from './types';

type View = 'home' | 'chat' | 'offices' | 'pricing' | 'vault' | 'hub';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [initialChatPrompt, setInitialChatPrompt] = useState<string>('');
  const [language, setLanguage] = useState('English');

  const handleCategorySelect = (category: GuideCategory) => {
    setInitialChatPrompt(`I need help with ${category.title} in ${language}. Specifically about: ${category.description}`);
    setCurrentView('chat');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white py-24 mb-12 rounded-b-[4rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full -mr-64 -mt-64 blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full -ml-48 -mb-48 blur-[80px]"></div>
              <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-xl rounded-2xl text-xs font-bold tracking-widest uppercase mb-8 border border-white/10 text-blue-200">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
                    Updated for 2024 Regs
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
                  Demystify <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">South African</span><br/>Bureaucracy.
                </h1>
                <p className="text-lg md:text-xl text-blue-100/70 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                  One platform for UIF, SASSA, IDs, and Visas. AI-powered advice tailored to your preferred language.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button 
                    onClick={() => { setInitialChatPrompt(''); setCurrentView('chat'); }}
                    className="group bg-blue-600 text-white px-10 py-5 rounded-3xl font-black shadow-2xl shadow-blue-500/40 hover:bg-blue-500 hover:-translate-y-1 transition-all flex items-center justify-center text-lg"
                  >
                    <i className="fas fa-magic mr-3 group-hover:rotate-12 transition-transform"></i>
                    Ask Assistant
                  </button>
                  <button 
                    onClick={() => setCurrentView('hub')}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-10 py-5 rounded-3xl font-black hover:bg-white/20 transition-all text-lg flex items-center justify-center"
                  >
                    <i className="fas fa-tasks mr-3"></i>
                    Application Hub
                  </button>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category Grid */}
              <section id="categories" className="py-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                  <div>
                    <h2 className="text-4xl font-black text-gray-900 tracking-tight">Browse Expert Guides</h2>
                    <p className="text-gray-500 mt-2 text-lg">Verified processes for essential SA services.</p>
                  </div>
                  <div className="bg-gray-100 p-2 rounded-2xl flex space-x-2">
                      {['English', 'isiZulu', 'Afrikaans'].map(lang => (
                        <button 
                          key={lang}
                          onClick={() => setLanguage(lang)}
                          className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                            language === lang ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'
                          }`}
                        >
                            {lang}
                        </button>
                      ))}
                  </div>
                </div>
                <CategoryGrid onCategorySelect={handleCategorySelect} />
              </section>

              {/* Quick Tools Grid */}
              <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div 
                    onClick={() => setCurrentView('vault')}
                    className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl hover:scale-[1.02] transition-all cursor-pointer group"
                  >
                      <div className="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-lg shadow-indigo-500/10">
                          <i className="fas fa-file-download text-2xl"></i>
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 mb-3">Form Vault</h3>
                      <p className="text-gray-500 font-medium">Download the latest UI19, Passport, and SASSA application PDFs.</p>
                  </div>
                  <div 
                    onClick={() => setCurrentView('offices')}
                    className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl hover:scale-[1.02] transition-all cursor-pointer group"
                  >
                      <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-lg shadow-emerald-500/10">
                          <i className="fas fa-search-location text-2xl"></i>
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 mb-3">Office Finder</h3>
                      <p className="text-gray-500 font-medium">Find Home Affairs or DLTC centers near you using live GPS.</p>
                  </div>
                  <div 
                    onClick={() => setCurrentView('hub')}
                    className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl hover:scale-[1.02] transition-all cursor-pointer group"
                  >
                      <div className="bg-amber-100 text-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-lg shadow-amber-500/10">
                          <i className="fas fa-check-double text-2xl"></i>
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 mb-3">My Trackers</h3>
                      <p className="text-gray-500 font-medium">Save your checklists and mark documents as gathered.</p>
                  </div>
              </section>
            </div>
          </div>
        );
      case 'chat':
        return (
          <div className="max-w-5xl mx-auto px-4 py-8 animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                    <button onClick={() => setCurrentView('home')} className="bg-white p-3 rounded-2xl mr-5 hover:bg-gray-100 transition-colors shadow-sm border border-gray-100">
                        <i className="fas fa-chevron-left text-gray-600"></i>
                    </button>
                    <div>
                        <h2 className="text-2xl font-black text-gray-900">LegalLink Assistant</h2>
                        <p className="text-sm text-gray-500">Multilingual support enabled: {language}</p>
                    </div>
                </div>
            </div>
            <ChatInterface initialMessage={initialChatPrompt} />
          </div>
        );
      case 'vault':
        return (
          <div className="max-w-5xl mx-auto px-4 py-8 animate-in zoom-in-95 duration-300">
            <div className="flex items-center mb-8">
                <button onClick={() => setCurrentView('home')} className="bg-white p-3 rounded-2xl mr-5 hover:bg-gray-100 transition-colors shadow-sm border border-gray-100">
                    <i className="fas fa-chevron-left text-gray-600"></i>
                </button>
                <h2 className="text-3xl font-black text-gray-900">Government Form Vault</h2>
            </div>
            <FormVault />
          </div>
        );
      case 'hub':
        return (
          <div className="max-w-6xl mx-auto px-4 py-12 animate-in slide-in-from-right duration-500">
             <div className="flex items-center mb-12">
                <button onClick={() => setCurrentView('home')} className="bg-white p-3 rounded-2xl mr-5 hover:bg-gray-100 transition-colors shadow-sm border border-gray-100">
                    <i className="fas fa-chevron-left text-gray-600"></i>
                </button>
                <h2 className="text-xl font-bold">Back to Dashboard</h2>
            </div>
            <ApplicationTracker />
          </div>
        );
      case 'offices':
        return (
          <div className="max-w-5xl mx-auto px-4 py-8 animate-in zoom-in-95 duration-300">
            <div className="flex items-center mb-8">
                <button onClick={() => setCurrentView('home')} className="bg-white p-3 rounded-2xl mr-5 hover:bg-gray-100 transition-colors shadow-sm border border-gray-100">
                    <i className="fas fa-chevron-left text-gray-600"></i>
                </button>
                <h2 className="text-3xl font-black text-gray-900">SA Office Locator</h2>
            </div>
            <OfficeFinder />
          </div>
        );
      case 'pricing':
        return (
          <div className="animate-in fade-in duration-500">
             <div className="flex items-center p-8">
                <button onClick={() => setCurrentView('home')} className="bg-white p-3 rounded-2xl mr-5 hover:bg-gray-100 transition-colors shadow-sm border border-gray-100">
                    <i className="fas fa-chevron-left text-gray-600"></i>
                </button>
                <h2 className="text-xl font-bold">Back to Home</h2>
            </div>
            <SubscriptionPlans />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout 
      onHomeClick={() => { setInitialChatPrompt(''); setCurrentView('home'); }} 
      onChatClick={() => { setInitialChatPrompt(''); setCurrentView('chat'); }}
    >
      {renderContent()}
    </Layout>
  );
};

export default App;
