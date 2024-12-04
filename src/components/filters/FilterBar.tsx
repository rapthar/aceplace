import React, { useState } from 'react';
import { SlidersHorizontal, LayoutGrid, List } from 'lucide-react';
import FilterModal from './FilterModal';
import { useSearchParams } from 'react-router-dom';

const FilterBar = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category')?.toUpperCase() || 'ALL';
  const view = searchParams.get('view') || 'grid';

  const handleViewChange = (newView: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('view', newView);
    setSearchParams(newParams);
  };

  const handleApplyFilters = (filters: any) => {
    const newParams = new URLSearchParams(searchParams);
    
    if (filters.priceRange[0] > 0) newParams.set('minPrice', filters.priceRange[0].toString());
    if (filters.priceRange[1] < 3000) newParams.set('maxPrice', filters.priceRange[1].toString());
    if (filters.bedrooms !== 'any') newParams.set('bedrooms', filters.bedrooms);
    if (filters.guests !== 'any') newParams.set('guests', filters.guests);
    if (filters.minRating > 0) newParams.set('rating', filters.minRating.toString());
    
    setSearchParams(newParams);
  };

  return (
    <div className="flex items-center justify-between py-6">
      <div className="text-gray-600">
        <span className="font-medium">649</span> {category === 'ALL' ? 'Properties' : category.toLowerCase()} available in Dubai City
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => handleViewChange('grid')}
            className={`p-2 rounded-lg transition-colors ${
              view === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-50'
            }`}
          >
            <LayoutGrid size={20} className="text-gray-600" />
          </button>
          <button 
            onClick={() => handleViewChange('list')}
            className={`p-2 rounded-lg transition-colors ${
              view === 'list' ? 'bg-gray-100' : 'hover:bg-gray-50'
            }`}
          >
            <List size={20} className="text-gray-600" />
          </button>
        </div>
        
        <button 
          onClick={() => setIsFilterModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <SlidersHorizontal size={18} />
          <span className="text-sm font-medium">Filters</span>
        </button>
      </div>

      <FilterModal 
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        onApply={handleApplyFilters}
      />
    </div>
  );
};

export default FilterBar;