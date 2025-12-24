
import React, { useState, useEffect } from 'react';
import { findGovernmentOffices } from '../services/geminiService';

const OFFICE_TYPES = [
  { id: 'sassa', name: 'SASSA Branches', icon: 'fa-hand-holding-heart' },
  { id: 'home-affairs', name: 'Home Affairs', icon: 'fa-id-card' },
  { id: 'dltc', name: 'License Centers (DLTC)', icon: 'fa-car' },
  { id: 'police', name: 'Police Stations', icon: 'fa-shield-alt' },
];

const OfficeFinder: React.FC = () => {
  const [selectedType, setSelectedType] = useState('sassa');
  const [offices, setOffices] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<{lat: number, lng: number} | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (err) => console.warn("Geolocation denied"),
      { enableHighAccuracy: true }
    );
  }, []);

  const searchOffices = async () => {
    setLoading(true);
    const type = OFFICE_TYPES.find(t => t.id === selectedType)?.name || selectedType;
    const result = await findGovernmentOffices(type, location?.lat, location?.lng);
    setOffices(result.offices);
    setLoading(false);
  };

  useEffect(() => {
    searchOffices();
  }, [selectedType, location]);

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 h-[650px] flex flex-col">
      <div className="p-6 bg-emerald-600 text-white">
        <h3 className="text-xl font-bold mb-1">Office Finder</h3>
        <p className="text-emerald-100 text-sm">Find nearest government service points</p>
      </div>

      <div className="flex p-4 gap-2 overflow-x-auto bg-gray-50 border-b border-gray-100 no-scrollbar">
        {OFFICE_TYPES.map(type => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`whitespace-nowrap px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all flex items-center shrink-0 ${
              selectedType === type.id 
              ? 'bg-emerald-600 text-white shadow-md' 
              : 'bg-white text-gray-600 hover:bg-emerald-50 border border-gray-200'
            }`}
          >
            <i className={`fas ${type.icon} mr-2`}></i>
            {type.name}
          </button>
        ))}
      </div>

      <div className="flex-grow overflow-y-auto p-6 space-y-4">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
            <p className="text-gray-500 font-medium">Scanning for nearby offices...</p>
          </div>
        ) : offices.length > 0 ? (
          offices.map((office, idx) => (
            <div key={idx} className="group p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-100 transition-all">
              <div className="flex justify-between items-start">
                <div className="flex-grow">
                  <h4 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">{office.name}</h4>
                  <p className="text-sm text-gray-500 mt-1 flex items-center">
                    <i className="fas fa-map-marker-alt text-emerald-500 mr-2"></i>
                    Click "Get Directions" for full address
                  </p>
                </div>
                <a 
                  href={office.uri} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-xl text-xs font-bold hover:bg-emerald-600 hover:text-white transition-all"
                >
                  GET DIRECTIONS
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-search-location text-gray-400 text-2xl"></i>
            </div>
            <p className="text-gray-500">No offices found in the immediate area.<br/>Try broadening your search.</p>
          </div>
        )}
      </div>
      
      <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest flex items-center justify-center">
            <i className="fas fa-info-circle mr-1.5"></i> Maps Grounding Active
        </p>
      </div>
    </div>
  );
};

export default OfficeFinder;
