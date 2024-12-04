import React from 'react';
import { Wifi, Tv, Car, Bath, Coffee, Wind } from 'lucide-react';

const amenities = [
  { icon: Wifi, label: 'Free WiFi' },
  { icon: Tv, label: 'Smart TV' },
  { icon: Car, label: 'Free parking' },
  { icon: Bath, label: 'Private bathroom' },
  { icon: Coffee, label: 'Kitchen' },
  { icon: Wind, label: 'Air conditioning' },
];

const PropertyAmenities = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {amenities.map(({ icon: Icon, label }, index) => (
          <div key={index} className="flex items-center gap-3">
            <Icon size={20} className="text-gray-600" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyAmenities;