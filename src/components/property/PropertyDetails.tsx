import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Bed, Star, Share2, Heart, MapPin } from 'lucide-react';
import { properties } from '../../data/properties';
import PropertyAmenities from './PropertyAmenities';
import PropertyGallery from './PropertyGallery';
import PropertyMap from './PropertyMap';
import PropertyHost from './PropertyHost';
import PropertyReviews from './PropertyReviews';
import SimilarProperties from './SimilarProperties';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties[Number(id)];

  if (!property) {
    return <div>Property not found</div>;
  }

  const { type, title, guests, bedrooms, price, rating, image } = property;

  return (
    <div className="min-h-screen bg-main">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-2xl font-semibold mb-1">{title}</h1>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={16} />
              <span>Dubai City, Jumeirah</span>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Share2 size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Heart size={20} />
            </button>
          </div>
        </div>

        {/* Gallery */}
        <PropertyGallery mainImage={image} type={type} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="bg-white rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="uppercase text-sm font-medium mb-1" 
                    style={{ color: type === 'HOUSE' ? '#3B82F6' : 
                      type === 'HOTEL' ? '#9333EA' : 
                      type === 'VILLA' ? '#10B981' : 
                      type === 'APARTMENT' ? '#F59E0B' : 
                      '#F43F5E' }}
                  >
                    {type}
                  </div>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users size={18} />
                      <span>{guests} guests</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed size={18} />
                      <span>{bedrooms} bedrooms</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="text-yellow-400" size={18} />
                    <span className="font-medium">{rating}</span>
                  </div>
                  <div className="text-gray-600">245 reviews</div>
                </div>
              </div>

              <PropertyAmenities />
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">About this place</h2>
              <p className="text-gray-600 leading-relaxed">
                Experience luxury living in this stunning {type.toLowerCase()} located in the heart of Jumeirah, Dubai. 
                This property offers breathtaking views and world-class amenities, perfect for both short-term stays 
                and extended vacations. The space features modern design elements while maintaining the authentic charm 
                of traditional Arabic architecture.
              </p>
            </div>

            {/* Location */}
            <PropertyMap />

            {/* Host */}
            <PropertyHost />

            {/* Reviews */}
            <PropertyReviews rating={rating} />
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-semibold">${price}</div>
                  <div className="text-gray-600">per night</div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border rounded-lg p-3">
                      <div className="text-sm text-gray-600 mb-1">Check-in</div>
                      <div className="font-medium">Add date</div>
                    </div>
                    <div className="border rounded-lg p-3">
                      <div className="text-sm text-gray-600 mb-1">Check-out</div>
                      <div className="font-medium">Add date</div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-3">
                    <div className="text-sm text-gray-600 mb-1">Guests</div>
                    <div className="font-medium">{guests} guests maximum</div>
                  </div>
                  <button className="w-full py-3 bg-[#0A0B2E] text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        <SimilarProperties currentType={type} currentId={Number(id)} />
      </div>
    </div>
  );
};

export default PropertyDetails;