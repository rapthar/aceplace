import React from 'react';

interface PropertyGalleryProps {
  mainImage: string;
  type: string;
}

const PropertyGallery = ({ mainImage, type }: PropertyGalleryProps) => {
  const gradientClass = type === 'HOUSE' ? 'from-blue-500/20' : 
    type === 'HOTEL' ? 'from-purple-500/20' : 
    type === 'VILLA' ? 'from-emerald-500/20' : 
    type === 'APARTMENT' ? 'from-amber-500/20' : 
    'from-rose-500/20';

  return (
    <div className="grid grid-cols-4 gap-4 rounded-xl overflow-hidden">
      <div className="col-span-2 row-span-2 relative">
        <img src={mainImage} alt="Main" className="w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} to-transparent`}></div>
      </div>
      <div className="relative">
        <img src={mainImage} alt="Gallery 1" className="w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} to-transparent`}></div>
      </div>
      <div className="relative">
        <img src={mainImage} alt="Gallery 2" className="w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} to-transparent`}></div>
      </div>
      <div className="relative">
        <img src={mainImage} alt="Gallery 3" className="w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} to-transparent`}></div>
      </div>
      <div className="relative">
        <img src={mainImage} alt="Gallery 4" className="w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} to-transparent`}></div>
      </div>
    </div>
  );
};

export default PropertyGallery;