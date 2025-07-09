import { NextRequest, NextResponse } from 'next/server';
import { seedDatabase } from '@/lib/seed';

export async function POST(request: NextRequest) {
  try {
    const packages = await seedDatabase();

    return NextResponse.json({
      message: 'Database seeded successfully',
      packagesCount: packages.length,
    });
  } catch (error) {
    console.error('Error seeding database:', error);
    return NextResponse.json(
      { error: 'Failed to seed database' },
      { status: 500 }
    );
  }
} 