import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email address
        </label>
        <div className="relative">
          <input
            id="email"
            name="email"
            type="email"
            required
            className="appearance-none block w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email"
          />
          <Mail className="absolute left-4 top-3.5 text-gray-400" size={20} />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            required
            className="appearance-none block w-full px-4 py-3 pl-12 pr-12 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your password"
          />
          <Lock className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>

        <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-[#0A0B2E] text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors"
      >
        Sign in
      </button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-main text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
          Google
        </button>
        <button
          type="button"
          className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5 mr-2" />
          Facebook
        </button>
      </div>
    </form>
  );
};

export default LoginForm;