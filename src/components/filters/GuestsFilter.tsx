import React from 'react';

interface GuestsFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const options = [
  { label: 'Any', value: 'any' },
  { label: '1-2', value: '2' },
  { label: '3-4', value: '4' },
  { label: '5-6', value: '6' },
  { label: '7-8', value: '8' },
  { label: '9+', value: '9' }
];

const GuestsFilter = ({ value, onChange }: GuestsFilterProps) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Guests</h3>
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

export default GuestsFilter;