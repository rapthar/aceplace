import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../layout/Logo';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  type: 'login' | 'signup';
}

const AuthLayout = ({ children, title, subtitle, type }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-main flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="mb-8">
            <Link to="/" className="inline-block mb-8">
              <Logo />
            </Link>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600">{subtitle}</p>
          </div>
          
          {children}
          
          <p className="mt-8 text-center text-gray-600">
            {type === 'login' ? "Don't have an account? " : "Already have an account? "}
            <Link 
              to={type === 'login' ? '/signup' : '/login'} 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              {type === 'login' ? 'Sign up' : 'Log in'}
            </Link>
          </p>
        </div>
      </div>
      
      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=2000&h=3000"
          alt="Real estate"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
      </div>
    </div>
  );
};

export default AuthLayout;