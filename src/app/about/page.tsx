import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              We're passionate about creating unforgettable travel experiences and helping you discover the world's most amazing destinations.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Wanderlust Voyages, we believe that travel has the power to transform lives. Our mission is to make extraordinary travel experiences accessible to everyone, creating memories that last a lifetime.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We carefully curate each package to ensure you get the perfect blend of adventure, relaxation, and cultural immersion. From pristine beaches to bustling cities, from mountain peaks to ancient ruins, we've got your dream destination covered.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Destinations</div>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Travel destinations"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">We never compromise on quality. Every package is carefully vetted to ensure the best experience for our travelers.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">We believe in building lasting relationships with our travelers and the communities we visit.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">We're committed to sustainable tourism practices that protect the environment and support local communities.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="John Smith"
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">John Smith</h3>
              <p className="text-green-600 mb-2">Founder & CEO</p>
              <p className="text-gray-600">Passionate traveler with 15+ years of experience in the tourism industry.</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Sarah Johnson"
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Sarah Johnson</h3>
              <p className="text-green-600 mb-2">Travel Specialist</p>
              <p className="text-gray-600">Expert in crafting personalized travel experiences for our clients.</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Mike Davis"
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Mike Davis</h3>
              <p className="text-green-600 mb-2">Operations Manager</p>
              <p className="text-gray-600">Ensuring smooth operations and exceptional customer service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 