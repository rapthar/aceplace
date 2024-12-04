import React from 'react';
import { Star } from 'lucide-react';

interface PropertyReviewsProps {
  rating: number;
}

const reviews = [
  {
    name: 'Sarah Johnson',
    date: 'October 2023',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=50&h=50',
    content: 'Amazing property with stunning views. The host was very accommodating and the amenities were top-notch.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    date: 'September 2023',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=50&h=50',
    content: 'Perfect location and beautiful interior. Would definitely stay here again!',
    rating: 4.5
  }
];

const PropertyReviews = ({ rating }: PropertyReviewsProps) => {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <Star className="text-yellow-400" size={24} />
        <span className="text-xl font-semibold">{rating} · 245 reviews</span>
      </div>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b pb-6 last:border-b-0 last:pb-0">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium">{review.name}</h3>
                <p className="text-gray-600 text-sm">{review.date}</p>
              </div>
            </div>
            <p className="text-gray-600">{review.content}</p>
          </div>
        ))}
      </div>

      <button className="mt-6 px-6 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
        Show all reviews
      </button>
    </div>
  );
};

export default PropertyReviews;