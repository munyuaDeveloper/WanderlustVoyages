import React from 'react';
import PackageDetailClient from './PackageDetailClient';

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

interface PackageDetailPageProps {
  params: Promise<{ id: string }>;
}

async function getPackage(id: string): Promise<Package> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/packages/${id}`, {
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error('Package not found');
  }

  return response.json();
}

export default async function PackageDetailPage({ params }: PackageDetailPageProps) {
  const { id } = await params;

  try {
    const packageData = await getPackage(id);

    return <PackageDetailClient packageData={packageData} />;
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">Package not found</p>
          <button
            onClick={() => window.history.back()}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
} 