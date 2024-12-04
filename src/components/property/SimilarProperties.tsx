import React from 'react';
import { properties } from '../../data/properties';
import PropertyCard from './PropertyCard';

interface SimilarPropertiesProps {
  currentType: string;
  currentId: number;
}

const SimilarProperties = ({ currentType, currentId }: SimilarPropertiesProps) => {
  const similarProperties = properties
    .filter(property => property.type === currentType && properties.indexOf(property) !== currentId)
    .slice(0, 3);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Similar properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarProperties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProperties;