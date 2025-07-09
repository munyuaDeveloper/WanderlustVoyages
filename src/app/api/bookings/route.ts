import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Booking from '@/models/Booking';
import { getUserIdFromRequest } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const userId = getUserIdFromRequest(request);
    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { packageId, travelDate, numberOfPeople } = await request.json();

    // Validation
    if (!packageId || !travelDate || !numberOfPeople) {
      return NextResponse.json(
        { error: 'Package ID, travel date, and number of people are required' },
        { status: 400 }
      );
    }

    if (numberOfPeople < 1) {
      return NextResponse.json(
        { error: 'Number of people must be at least 1' },
        { status: 400 }
      );
    }

    const bookingDate = new Date();
    const parsedTravelDate = new Date(travelDate);

    if (parsedTravelDate <= bookingDate) {
      return NextResponse.json(
        { error: 'Travel date must be in the future' },
        { status: 400 }
      );
    }

    const booking = await Booking.create({
      userId,
      packageId,
      bookingDate,
      travelDate: parsedTravelDate,
      numberOfPeople,
      status: 'pending',
    });

    return NextResponse.json({
      message: 'Booking created successfully',
      booking,
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const userId = getUserIdFromRequest(request);
    if (!userId) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const bookings = await Booking.find({ userId })
      .populate('packageId', 'title price location featureImage')
      .sort({ createdAt: -1 });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 