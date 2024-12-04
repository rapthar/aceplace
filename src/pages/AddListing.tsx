import React from 'react';
import Layout from '../components/layout/Layout';
import { Building2, MapPin, Upload, DollarSign, Users, Bed } from 'lucide-react';

const AddListing = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-8">
          <h1 className="text-2xl font-semibold mb-8">Add New Property Listing</h1>
          
          <form className="space-y-8">
            {/* Basic Information */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Basic Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter property title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Type
                  </label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select type</option>
                    <option value="HOUSE">House</option>
                    <option value="HOTEL">Hotel</option>
                    <option value="VILLA">Villa</option>
                    <option value="APARTMENT">Apartment</option>
                    <option value="CAMP">Camp House</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Location</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter city"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Area
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter area"
                  />
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Property Details</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price (USD)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    <input
                      type="number"
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter price"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bedrooms
                  </label>
                  <div className="relative">
                    <Bed className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    <input
                      type="number"
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Number of bedrooms"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Max Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    <input
                      type="number"
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Maximum guests"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Description</h2>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                placeholder="Enter property description"
              ></textarea>
            </div>

            {/* Images */}
            <div className="space-y-4">
              <h2 className="text-lg font-medium">Property Images</h2>
              <div className="border-2 border-dashed rounded-lg p-8">
                <div className="flex flex-col items-center">
                  <Upload className="text-gray-400 mb-4" size={32} />
                  <p className="text-sm text-gray-600 mb-2">Drag and drop your images here</p>
                  <p className="text-xs text-gray-500 mb-4">or</p>
                  <button type="button" className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium">
                    Browse Files
                  </button>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-[#0A0B2E] text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                Create Listing
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddListing;