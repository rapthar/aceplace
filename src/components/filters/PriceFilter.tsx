import React from 'react';

interface PriceFilterProps {
  value: [number, number];
  onChange: (range: [number, number]) => void;
}

const PriceFilter = ({ value, onChange }: PriceFilterProps) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Price range</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Min price</label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-500">$</span>
              <input
                type="number"
                value={value[0]}
                onChange={(e) => onChange([Number(e.target.value), value[1]])}
                className="w-full pl-8 pr-4 py-2 border rounded-lg"
                placeholder="0"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Max price</label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-500">$</span>
              <input
                type="number"
                value={value[1]}
                onChange={(e) => onChange([value[0], Number(e.target.value)])}
                className="w-full pl-8 pr-4 py-2 border rounded-lg"
                placeholder="3000"
              />
            </div>
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="3000"
          value={value[1]}
          onChange={(e) => onChange([value[0], Number(e.target.value)])}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default PriceFilter;