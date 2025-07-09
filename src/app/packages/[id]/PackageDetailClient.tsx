'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import BookingForm from '@/components/booking/BookingForm';

interface Package {
  _id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  duration: string;
  location: string;
  featureImage: string;
  images: string[];
}

interface PackageDetailClientProps {
  packageData: Package;
}

export default function PackageDetailClient({ packageData }: PackageDetailClientProps) {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const { user } = useAuth();

  const handleBookingSuccess = () => {
    setShowBookingForm(false);
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 5000);
  };

  return (
    <div className="bg-gray-50">
      {/* Success Message */}
      {bookingSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Booking successful! Check your dashboard for details.
          </div>
        </div>
      )}

      {/* Package Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{packageData.title}</h1>
              <p className="text-gray-600 mt-2">{packageData.location}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-600">KES {packageData.price.toLocaleString()}</div>
              <div className="text-gray-600">per person</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Feature Image */}
            <div className="relative h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src={packageData.featureImage}
                alt={packageData.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
              />
            </div>

            {/* Package Details */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">About This Package</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{packageData.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Duration</div>
                    <div className="text-gray-600">{packageData.duration}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Location</div>
                    <div className="text-gray-600">{packageData.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            {packageData.images && packageData.images.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {packageData.images.map((image, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${packageData.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <div className="mb-6">
                <div className="text-3xl font-bold text-green-600 mb-2">KES {packageData.price.toLocaleString()}</div>
                <div className="text-gray-600">per person</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Duration: {packageData.duration}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Location: {packageData.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  Category: {packageData.category}
                </div>
              </div>

              {user ? (
                <button
                  onClick={() => setShowBookingForm(true)}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 font-medium"
                >
                  Book Now
                </button>
              ) : (
                <div className="text-center">
                  <p className="text-gray-600 mb-4">Please log in to book this package</p>
                  <button
                    onClick={() => window.location.href = '/auth'}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 font-medium"
                  >
                    Login to Book
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <BookingForm
          package={packageData}
          onBookingSuccess={handleBookingSuccess}
          onCancel={() => setShowBookingForm(false)}
        />
      )}
    </div>
  );
} 