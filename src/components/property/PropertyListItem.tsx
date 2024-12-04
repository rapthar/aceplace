import React from 'react';
import { Bookmark, Users, Bed, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { properties } from '../../data/properties';

interface PropertyListItemProps {
  type: string;
  title: string;
  guests: number;
  bedrooms: number;
  price: number;
  rating: number;
  image: string;
}

const categoryColors = {
  HOUSE: 'from-blue-500/20 to-blue-600/20',
  HOTEL: 'from-purple-500/20 to-purple-600/20',
  VILLA: 'from-emerald-500/20 to-emerald-600/20',
  APARTMENT: 'from-amber-500/20 to-amber-600/20',
  CAMP: 'from-rose-500/20 to-rose-600/20'
};

const PropertyListItem = ({ type, title, guests, bedrooms, price, rating, image }: PropertyListItemProps) => {
  const index = properties.findIndex(p => p.title === title);

  return (
    <Link to={`/property/${index}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex">
          <div className="relative w-80 h-64">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[type]}`}></div>
            <button 
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                // Handle bookmark
              }}
            >
              <Bookmark size={18} />
            </button>
          </div>
          
          <div className="flex-1 p-6">
            <div className="uppercase text-xs font-medium mb-2" style={{ color: type === 'HOUSE' ? '#3B82F6' : 
              type === 'HOTEL' ? '#9333EA' : 
              type === 'VILLA' ? '#10B981' : 
              type === 'APARTMENT' ? '#F59E0B' : 
              '#F43F5E' }}>{type}</div>
            
            <h3 className="text-xl font-medium mb-4 hover:text-blue-600 transition-colors">{title}</h3>
            
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <Users size={18} />
                <span>{guests} guests</span>
              </div>
              <div className="flex items-center gap-1">
                <Bed size={18} />
                <span>{bedrooms} bedrooms</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-auto">
              <div>
                <span className="text-2xl font-semibold">${price}</span>
                <span className="text-gray-500"> USD</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyListItem;