'use client';

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

interface Package {
  _id: string;
  title: string;
  price: number;
}

interface BookingFormProps {
  package: Package;
  onBookingSuccess: () => void;
  onCancel: () => void;
}

export default function BookingForm({ package: travelPackage, onBookingSuccess, onCancel }: BookingFormProps) {
  const [travelDate, setTravelDate] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { token } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          packageId: travelPackage._id,
          travelDate,
          numberOfPeople,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Booking failed');
      }

      onBookingSuccess();
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Booking failed');
    } finally {
      setLoading(false);
    }
  };

  const totalPrice = travelPackage.price * numberOfPeople;
  const minDate = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Book Your Trip</h2>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-4">
          <h3 className="font-medium text-gray-900">{travelPackage.title}</h3>
                          <p className="text-gray-600">KES {travelPackage.price.toLocaleString()} per person</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-1">
              Travel Date
            </label>
            <input
              type="date"
              id="travelDate"
              required
              min={minDate}
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-700 mb-1">
              Number of People
            </label>
            <input
              type="number"
              id="numberOfPeople"
              min="1"
              max="10"
              required
              value={numberOfPeople}
              onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Price per person:</span>
                              <span className="font-medium">KES {travelPackage.price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Number of people:</span>
              <span className="font-medium">{numberOfPeople}</span>
            </div>
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total Price:</span>
                              <span className="text-green-600">KES {totalPrice.toLocaleString()}</span>
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Booking...' : 'Confirm Booking'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 