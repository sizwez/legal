
import React from 'react';
import { SubscriptionPlan } from '../types';

const PLANS: SubscriptionPlan[] = [
  {
    id: 'free',
    name: 'Citizen',
    price: 'Free',
    features: ['Standard AI Assistant', 'Office Finder', 'Public Form Links', 'Basic Checklists']
  },
  {
    id: 'pro',
    name: 'Priority',
    price: 'R149/mo',
    isPopular: true,
    features: ['Advanced Reasoning AI', 'Unlimited Office Search', 'Auto-filled Forms (Beta)', 'Direct Referral to Consultants', 'Priority Support']
  },
  {
    id: 'business',
    name: 'Business',
    price: 'R499/mo',
    features: ['Dedicated Account Manager', 'Multiple User Access', 'Full Document Storage', 'Direct API Access', 'Weekly Legal Bulletins']
  }
];

const SubscriptionPlans: React.FC = () => {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Choose Your Access Level</h2>
        <p className="text-xl text-gray-500">Get the support you need to conquer South African bureaucracy.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PLANS.map(plan => (
          <div 
            key={plan.id} 
            className={`relative p-8 rounded-3xl border ${
              plan.isPopular 
              ? 'border-blue-500 shadow-2xl scale-105 z-10 bg-white' 
              : 'border-gray-200 shadow-xl bg-white/80'
            } flex flex-col`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                Most Popular
              </div>
            )}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-black text-blue-600">{plan.price}</span>
                {plan.price !== 'Free' && <span className="text-gray-400 ml-1">/month</span>}
              </div>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start text-sm text-gray-600">
                  <i className={`fas fa-check-circle mr-3 mt-1 ${plan.isPopular ? 'text-blue-500' : 'text-emerald-500'}`}></i>
                  {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 rounded-2xl font-bold transition-all shadow-lg ${
              plan.isPopular 
              ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-500/30' 
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
