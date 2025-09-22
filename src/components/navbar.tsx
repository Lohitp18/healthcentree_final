'use client'

import React, { useEffect, useState } from 'react';
import { Phone, Award, Shield } from 'lucide-react';
import logo from "../images/logo.png"

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 0) setShowNavbar(true);
      else setShowNavbar(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Top Bar with Credentials */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Award size={16} />
              <span>JCI Accredited</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield size={16} />
              <span>ISO 9001:2015 Certified</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <span>Emergency: +91 9876543210</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-4 sm:h-24 space-x-4">
            {/* Logo */}
            <img
              src={logo}
              alt="Alva's Logo"
              className="h-20 w-20 sm:h-20 sm:w-20"
            />

            {/* Title */}
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 font-serif">
                Alva's Health Centre
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                Excellence in Healthcare Since 1985
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
