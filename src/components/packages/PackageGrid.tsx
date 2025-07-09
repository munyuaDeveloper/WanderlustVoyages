'use client';

import React, { useState, useEffect } from 'react';
import PackageCard from './PackageCard';

interface Package {
  _id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  duration: string;
  location: string;
  featureImage: string;
}

const categories = ['All', 'Adventure', 'Beach', 'Cultural', 'City', 'Nature', 'Luxury'];

export default function PackageGrid() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [filteredPackages, setFilteredPackages] = useState<Package[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPackages();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredPackages(packages);
    } else {
      setFilteredPackages(packages.filter(pkg => pkg.category === selectedCategory));
    }
  }, [selectedCategory, packages]);

  const fetchPackages = async () => {
    try {
      const response = await fetch('/api/packages');
      if (!response.ok) {
        throw new Error('Failed to fetch packages');
      }
      const data = await response.json();
      setPackages(data);
      setFilteredPackages(data);
    } catch (error) {
      setError('Failed to load packages');
      console.error('Error fetching packages:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">{error}</p>
        <button
          onClick={fetchPackages}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Filter by Category</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedCategory === category
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredPackages.length} package{filteredPackages.length !== 1 ? 's' : ''}
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </p>
      </div>

      {/* Packages Grid */}
      {filteredPackages.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No packages found for this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((travelPackage) => (
            <PackageCard key={travelPackage._id} package={travelPackage} />
          ))}
        </div>
      )}
    </div>
  );
} 