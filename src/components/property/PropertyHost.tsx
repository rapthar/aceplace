import React from 'react';
import { MessageCircle } from 'lucide-react';

const PropertyHost = () => {
  return (
    <div className="bg-white rounded-xl p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Meet your host</h2>
      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
          alt="Host"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-medium mb-1">Ahmed Hassan</h3>
          <p className="text-gray-600 text-sm mb-2">Superhost · 245 reviews</p>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
            <MessageCircle size={18} />
            <span>Contact host</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyHost;