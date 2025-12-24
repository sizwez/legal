
import React from 'react';
import { CATEGORIES } from '../constants';
import { GuideCategory } from '../types';

interface CategoryGridProps {
  onCategorySelect: (category: GuideCategory) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ onCategorySelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {CATEGORIES.map((cat) => (
        <div 
          key={cat.id}
          onClick={() => onCategorySelect(cat)}
          className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all cursor-pointer flex items-start space-x-4"
        >
          <div className={`${cat.color} p-4 rounded-xl text-white shadow-lg shadow-blue-500/10 transition-transform group-hover:scale-110`}>
            <i className={`fas ${cat.icon} text-2xl`}></i>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{cat.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{cat.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
