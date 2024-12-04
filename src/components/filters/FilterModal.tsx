import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import PriceFilter from './PriceFilter';
import BedroomsFilter from './BedroomsFilter';
import GuestsFilter from './GuestsFilter';
import RatingFilter from './RatingFilter';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: any) => void;
}

const FilterModal = ({ isOpen, onClose, onApply }: FilterModalProps) => {
  const [filters, setFilters] = useState({
    priceRange: [0, 3000],
    bedrooms: 'any',
    guests: 'any',
    minRating: 0
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b sticky top-0 bg-white z-10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Filters</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          <PriceFilter 
            value={filters.priceRange}
            onChange={(range) => setFilters({ ...filters, priceRange: range })}
          />
          
          <BedroomsFilter 
            value={filters.bedrooms}
            onChange={(value) => setFilters({ ...filters, bedrooms: value })}
          />
          
          <GuestsFilter 
            value={filters.guests}
            onChange={(value) => setFilters({ ...filters, guests: value })}
          />
          
          <RatingFilter 
            value={filters.minRating}
            onChange={(value) => setFilters({ ...filters, minRating: value })}
          />
        </div>

        <div className="p-6 border-t sticky bottom-0 bg-white z-10">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setFilters({
                priceRange: [0, 3000],
                bedrooms: 'any',
                guests: 'any',
                minRating: 0
              })}
              className="text-gray-600 hover:text-gray-900"
            >
              Clear all
            </button>
            <button
              onClick={() => {
                onApply(filters);
                onClose();
              }}
              className="px-6 py-2 bg-[#0A0B2E] text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Show results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;