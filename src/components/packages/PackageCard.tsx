'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

interface PackageCardProps {
  package: Package;
}

export default function PackageCard({ package: travelPackage }: PackageCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={travelPackage.featureImage}
          alt={travelPackage.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 left-2">
          <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            {travelPackage.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {travelPackage.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {travelPackage.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {travelPackage.location}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {travelPackage.duration}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-green-600">
                            KES {travelPackage.price.toLocaleString()}
          </div>
          <Link
            href={`/packages/${travelPackage._id}`}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
} 