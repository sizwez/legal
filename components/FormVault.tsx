
import React, { useState } from 'react';
import { GOV_FORMS } from '../constants';

const FormVault: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredForms = GOV_FORMS.filter(f => 
    f.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col h-[650px]">
      <div className="p-8 bg-indigo-600 text-white">
        <h3 className="text-2xl font-bold mb-2">Form Vault</h3>
        <p className="text-indigo-100 text-sm">Download official South African government documents</p>
        <div className="mt-6 relative">
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a form (e.g. UI19, Passport...)"
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-3 px-12 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
          />
          <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-white/60"></i>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto p-6 space-y-4">
        {filteredForms.map(form => (
          <div key={form.id} className="group p-5 bg-gray-50 rounded-2xl hover:bg-white border border-transparent hover:border-indigo-100 hover:shadow-md transition-all flex items-center justify-between">
            <div className="flex items-center">
                <div className="bg-indigo-100 p-3 rounded-xl mr-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <i className="fas fa-file-pdf text-xl"></i>
                </div>
                <div>
                    <h4 className="font-bold text-gray-900">{form.title}</h4>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">{form.department} Department</p>
                </div>
            </div>
            <a 
              href={form.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all flex items-center shadow-sm"
            >
              <i className="fas fa-download mr-2"></i>
              DOWNLOAD
            </a>
          </div>
        ))}
        {filteredForms.length === 0 && (
            <div className="text-center py-20">
                <i className="fas fa-folder-open text-gray-300 text-5xl mb-4"></i>
                <p className="text-gray-500">We couldn't find that specific form.<br/>Ask the AI Assistant for help locating it.</p>
            </div>
        )}
      </div>
      
      <div className="p-4 bg-gray-50 border-t border-gray-100 text-center text-[10px] text-gray-400 font-bold tracking-widest uppercase">
        <i className="fas fa-shield-alt mr-1.5 text-indigo-400"></i> Verified Official Links
      </div>
    </div>
  );
};

export default FormVault;
