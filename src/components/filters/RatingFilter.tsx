import React from 'react';
import { Star } from 'lucide-react';

interface RatingFilterProps {
  value: number;
  onChange: (value: number) => void;
}

const RatingFilter = ({ value, onChange }: RatingFilterProps) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Minimum rating</h3>
      <div className="flex items-center gap-2">
        {[0, 1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            onClick={() => onChange(rating)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border ${
              value === rating
                ? 'bg-[#0A0B2E] text-white border-transparent'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            {rating === 0 ? (
              'Any'
            ) : (
              <>
                {rating}
                <Star size={16} className={value === rating ? 'text-white' : 'text-yellow-400'} />
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RatingFilter;