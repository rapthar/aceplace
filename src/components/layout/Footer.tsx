import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-600">
              Find your perfect place with our comprehensive property listings.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Cancellation Options</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Safety Information</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Report Issue</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Sitemap</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm">
            © 2024 Aceplace. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-gray-600 text-sm mt-4 md:mt-0">
            Made with <Heart size={14} className="text-red-500" /> in Dubai
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;