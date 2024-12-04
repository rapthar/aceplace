import React from 'react';
import { MapPin } from 'lucide-react';

const PropertyMap = () => {
  return (
    <div className="bg-white rounded-xl p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Location</h2>
      <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={24} className="mx-auto mb-2 text-gray-400" />
            <p className="text-gray-600">Map view available in production</p>
          </div>
        </div>
      </div>
      <div className="mt-4 text-gray-600">
        <p>Jumeirah Beach Road, Dubai, United Arab Emirates</p>
      </div>
    </div>
  );
};

export default PropertyMap;