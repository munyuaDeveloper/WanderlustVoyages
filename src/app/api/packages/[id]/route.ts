import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Package from '@/models/Package';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // Extract the id from the URL pathname
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const packageId = pathParts[pathParts.length - 1];

    if (!packageId) {
      return NextResponse.json(
        { error: 'Package ID is required' },
        { status: 400 }
      );
    }

    const packageData = await Package.findById(packageId);

    if (!packageData) {
      return NextResponse.json(
        { error: 'Package not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(packageData);
  } catch (error) {
    console.error('Error fetching package:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 