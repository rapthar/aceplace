import React from 'react';

interface BedroomsFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const options = [
  { label: 'Any', value: 'any' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5+', value: '5' }
];

const BedroomsFilter = ({ value, onChange }: BedroomsFilterProps) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Bedrooms</h3>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`px-4 py-2 rounded-lg border ${
              value === option.value
                ? 'bg-[#0A0B2E] text-white border-transparent'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BedroomsFilter;