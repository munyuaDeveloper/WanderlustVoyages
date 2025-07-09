import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Package from '@/models/Package';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    let query = {};
    if (category) {
      query = { category };
    }

    const packages = await Package.find(query).sort({ createdAt: -1 });

    return NextResponse.json(packages);
  } catch (error) {
    console.error('Error fetching packages:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 