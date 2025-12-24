
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  onHomeClick: () => void;
  onChatClick: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onHomeClick, onChatClick }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-[100]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div 
              className="flex items-center cursor-pointer group" 
              onClick={onHomeClick}
            >
              <div className="bg-blue-600 p-2.5 rounded-2xl mr-3 group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-blue-500/20">
                <i className="fas fa-gavel text-white text-xl"></i>
              </div>
              <h1 className="text-2xl font-black text-gray-900 tracking-tighter">
                LegalLink<span className="text-blue-600">SA</span>
              </h1>
            </div>
            <nav className="hidden lg:flex space-x-10">
              <button onClick={onHomeClick} className="text-gray-500 hover:text-blue-600 font-bold text-sm tracking-wide uppercase transition-colors">Home</button>
              <button onClick={onChatClick} className="text-gray-500 hover:text-blue-600 font-bold text-sm tracking-wide uppercase transition-colors">AI Assistant</button>
              <a href="#" className="text-gray-500 hover:text-blue-600 font-bold text-sm tracking-wide uppercase transition-colors">Resources</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 font-bold text-sm tracking-wide uppercase transition-colors">Verified Pros</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-900 font-bold text-sm px-6 py-3 rounded-2xl hover:bg-gray-50 transition-colors hidden sm:block">
                Login
              </button>
              <button className="bg-gray-900 text-white px-8 py-3.5 rounded-2xl font-black text-sm shadow-xl hover:bg-gray-800 transition-all active:scale-95">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-[#020617] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <i className="fas fa-gavel text-blue-500 text-3xl mr-4"></i>
                <span className="text-3xl font-black tracking-tighter">LegalLink SA</span>
              </div>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                The leading platform for South African citizens to demystify government processes and obtain verified legal guidance.
              </p>
              <div className="flex space-x-5">
                <a href="#" className="bg-white/5 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"><i className="fab fa-twitter text-sm"></i></a>
                <a href="#" className="bg-white/5 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"><i className="fab fa-facebook-f text-sm"></i></a>
                <a href="#" className="bg-white/5 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"><i className="fab fa-linkedin-in text-sm"></i></a>
              </div>
            </div>
            <div>
              <h3 className="font-black text-lg mb-8 uppercase tracking-widest text-blue-500">Government Links</h3>
              <ul className="space-y-4 text-gray-400 text-sm font-medium">
                <li><a href="https://www.gov.za" className="hover:text-white transition-colors">South African Government Portal</a></li>
                <li><a href="https://www.sassa.gov.za" className="hover:text-white transition-colors">SASSA Official Site</a></li>
                <li><a href="https://www.dha.gov.za" className="hover:text-white transition-colors">Home Affairs Online</a></li>
                <li><a href="https://www.uif.gov.za" className="hover:text-white transition-colors">UIF Beneficiary Portal</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-lg mb-8 uppercase tracking-widest text-blue-500">Legal Resources</h3>
              <ul className="space-y-4 text-gray-400 text-sm font-medium">
                <li><a href="#" className="hover:text-white transition-colors">UIF Claim Tracker</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SASSA Status Check</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Visa Fee Calculator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Public Holiday Calendar</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-lg mb-8 uppercase tracking-widest text-blue-500">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-6 font-medium">Get bureaucratic changes and news directly in your inbox.</p>
              <div className="relative">
                <input type="email" placeholder="email@address.com" className="bg-white/5 text-white px-5 py-4 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/10" />
                <button className="absolute right-2 top-2 bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-500 transition-colors">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-bold tracking-widest uppercase">
            <p>&copy; {new Date().getFullYear()} LegalLink SA. All Rights Reserved.</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
