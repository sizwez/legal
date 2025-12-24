
import React, { useState } from 'react';
import { UserChecklist } from '../types';

const INITIAL_CHECKLISTS: UserChecklist[] = [
  {
    id: '1',
    title: 'Passport Renewal',
    items: [
      { id: 'i1', text: 'Original Green ID / Smart Card', completed: true },
      { id: 'i2', text: 'Certified copy of ID', completed: false },
      { id: 'i3', text: 'Proof of address (recent)', completed: false },
      { id: 'i4', text: 'eHomeAffairs Appointment Booking', completed: true },
      { id: 'i5', text: 'R600 application fee', completed: false },
    ]
  }
];

const ApplicationTracker: React.FC = () => {
  const [checklists, setChecklists] = useState<UserChecklist[]>(INITIAL_CHECKLISTS);

  const toggleItem = (checklistId: string, itemId: string) => {
    setChecklists(prev => prev.map(cl => {
      if (cl.id !== checklistId) return cl;
      return {
        ...cl,
        items: cl.items.map(item => item.id === itemId ? { ...item, completed: !item.completed } : item)
      };
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-black text-gray-900">My Hub</h2>
        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center">
            <i className="fas fa-plus mr-2"></i> NEW TRACKER
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {checklists.map(cl => {
          const progress = Math.round((cl.items.filter(i => i.completed).length / cl.items.length) * 100);
          return (
            <div key={cl.id} className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <i className="fas fa-file-signature text-7xl"></i>
              </div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-1">{cl.title}</h3>
                    <p className="text-gray-500 text-sm font-medium">Ongoing Application</p>
                </div>
                <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-2xl font-black text-xs border border-blue-100">
                    {progress}% DONE
                </div>
              </div>

              <div className="w-full bg-gray-100 h-2.5 rounded-full mb-8 overflow-hidden">
                <div 
                    className="bg-blue-600 h-full rounded-full transition-all duration-1000" 
                    style={{ width: `${progress}%` }}
                ></div>
              </div>

              <ul className="space-y-4">
                {cl.items.map(item => (
                  <li 
                    key={item.id} 
                    onClick={() => toggleItem(cl.id, item.id)}
                    className="flex items-center group/item cursor-pointer"
                  >
                    <div className={`w-6 h-6 rounded-lg mr-4 border-2 flex items-center justify-center transition-all ${
                        item.completed 
                        ? 'bg-emerald-500 border-emerald-500 text-white' 
                        : 'border-gray-200 group-hover/item:border-blue-400'
                    }`}>
                        {item.completed && <i className="fas fa-check text-[10px]"></i>}
                    </div>
                    <span className={`text-sm font-medium transition-all ${item.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                        {item.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-50 flex gap-3">
                 <button className="text-xs font-bold text-gray-400 hover:text-blue-600 uppercase tracking-widest">Add Item</button>
                 <span className="text-gray-200">|</span>
                 <button className="text-xs font-bold text-gray-400 hover:text-rose-600 uppercase tracking-widest">Delete</button>
              </div>
            </div>
          );
        })}
        
        <div className="border-2 border-dashed border-gray-200 rounded-[2.5rem] flex flex-col items-center justify-center p-12 hover:border-blue-300 hover:bg-blue-50/30 transition-all group cursor-pointer">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                <i className="fas fa-plus text-xl text-gray-400 group-hover:text-blue-600"></i>
            </div>
            <p className="font-bold text-gray-400 group-hover:text-blue-600">Track another service</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationTracker;
