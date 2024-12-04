import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/">
              <Logo />
            </Link>
            <div className="relative">
              <span className="text-sm text-gray-600 flex items-center gap-1">
                EN <ChevronDown size={16} />
              </span>
            </div>
            <div className="relative flex-1 max-w-xl">
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <button className="px-3 py-1.5 bg-[#E9FB03] rounded-full text-sm font-medium">
                Buy
              </button>
              <button className="text-sm text-gray-600 hover:text-gray-900">Sell</button>
              <button className="text-sm text-gray-600 hover:text-gray-900">Rent</button>
              <button className="text-sm text-gray-600 hover:text-gray-900">Contact us</button>
            </nav>
            
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1">
                USD <ChevronDown size={16} />
              </span>
            </div>
            
            <Link to="/add-listing" className="px-6 py-2 bg-[#E9FB03] text-[#0A0B2E] rounded-full text-sm font-medium">
              Add Listing
            </Link>
            <Link to="/login" className="px-6 py-2 bg-[#0A0B2E] text-white rounded-full text-sm font-medium">
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;