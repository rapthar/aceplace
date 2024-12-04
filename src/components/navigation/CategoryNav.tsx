import React from 'react';
import { Grid, Building2, Home, Building, Tent, MapPin } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const categories = [
  { 
    icon: Grid, 
    label: 'ALL CATEGORY', 
    value: 'all',
    gradient: 'from-pink-500 to-rose-500'
  },
  { 
    icon: Home, 
    label: 'House', 
    value: 'house',
    gradient: 'from-gray-100 to-gray-200'
  },
  { 
    icon: Building2, 
    label: 'Hotel', 
    value: 'hotel',
    gradient: 'from-gray-100 to-gray-200'
  },
  { 
    icon: Home, 
    label: 'Villa', 
    value: 'villa',
    gradient: 'from-indigo-400 to-indigo-500'
  },
  { 
    icon: Building, 
    label: 'Apartment', 
    value: 'apartment',
    gradient: 'from-gray-100 to-gray-200'
  },
  { 
    icon: Tent, 
    label: 'Camp House', 
    value: 'camp',
    gradient: 'from-gray-100 to-gray-200'
  }
];

const CategoryNav = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';

  const handleCategoryClick = (value: string) => {
    setSearchParams({ category: value });
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
        <div className="flex items-center min-w-max">
          {categories.map(({ icon: Icon, label, value, gradient }) => (
            <button
              key={value}
              onClick={() => handleCategoryClick(value)}
              className={`flex items-center gap-2 px-4 md:px-8 py-4 text-sm font-medium relative whitespace-nowrap ${
                value === currentCategory 
                  ? `text-white bg-gradient-to-r ${gradient}` 
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Icon size={20} className={value === currentCategory ? 'text-white' : 'text-gray-400'} />
              <span className="hidden sm:inline">{label}</span>
              <span className="sm:hidden">{label.split(' ')[0]}</span>
              {value === currentCategory && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-indigo-600" />
              )}
            </button>
          ))}
          
          <div className="ml-auto flex items-center gap-2 py-4 pl-4">
            <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <MapPin size={14} className="text-blue-600" />
              </div>
              <span className="text-sm font-medium hidden sm:inline">Dubai City</span>
              <span className="text-sm text-gray-500 hidden md:inline">Jumeirah</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;