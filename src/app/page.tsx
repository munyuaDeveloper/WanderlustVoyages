import React from 'react';
import PackageGrid from '@/components/packages/PackageGrid';
import AnimatedGlobe from '@/components/AnimatedGlobe';

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">
                Discover Your Next Adventure
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-100">
                Explore amazing destinations around the world with our curated travel packages
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm">Destinations</div>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm">Happy Travelers</div>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm">Support</div>
                </div>
              </div>
            </div>

            {/* Right Column - Animated Globe */}
            <div className="flex justify-center items-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white bg-opacity-10 rounded-full p-4">
                <AnimatedGlobe />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Travel Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From tropical beaches to mountain adventures, we have the perfect trip for every traveler
            </p>
          </div>
          <PackageGrid />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Prices</h3>
              <p className="text-gray-600">We guarantee the best prices for all our travel packages</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for all your travel needs</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Curated Experiences</h3>
              <p className="text-gray-600">Hand-picked destinations and experiences for unforgettable memories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
