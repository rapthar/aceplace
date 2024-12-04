import React from 'react';
import PropertyCard from './PropertyCard';
import PropertyListItem from './PropertyListItem';
import { properties } from '../../data/properties';
import { useSearchParams } from 'react-router-dom';

const PropertyGrid = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category')?.toUpperCase() || 'ALL';
  const view = searchParams.get('view') || 'grid';
  const minPrice = Number(searchParams.get('minPrice')) || 0;
  const maxPrice = Number(searchParams.get('maxPrice')) || Infinity;
  const bedrooms = searchParams.get('bedrooms') || 'any';
  const guests = searchParams.get('guests') || 'any';
  const rating = Number(searchParams.get('rating')) || 0;

  const filteredProperties = properties.filter(property => {
    if (category !== 'ALL' && property.type !== category) return false;
    if (property.price < minPrice || property.price > maxPrice) return false;
    if (bedrooms !== 'any') {
      if (bedrooms === '5') {
        if (property.bedrooms < 5) return false;
      } else {
        if (property.bedrooms !== Number(bedrooms)) return false;
      }
    }
    if (guests !== 'any') {
      if (guests === '9') {
        if (property.guests < 9) return false;
      } else {
        if (property.guests > Number(guests)) return false;
      }
    }
    if (property.rating < rating) return false;
    return true;
  });

  if (view === 'list') {
    return (
      <div className="space-y-8">
        {filteredProperties.map((property, index) => (
          <PropertyListItem key={index} {...property} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {filteredProperties.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}
    </div>
  );
};

export default PropertyGrid;