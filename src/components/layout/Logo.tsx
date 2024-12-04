import React from 'react';
import { Home } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Home className="text-pink-500" size={24} />
      <span className="font-semibold text-xl">aceplace</span>
    </div>
  );
};

export default Logo;