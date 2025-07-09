import connectDB from './mongodb';
import Package from '../models/Package';

const samplePackages = [
  {
    title: 'Tropical Paradise in Bali',
    category: 'Beach',
    description: 'Experience the ultimate beach getaway with pristine white sands, crystal clear waters, and luxurious beachfront accommodations. Perfect for relaxation and water activities.',
    price: 194850,
    duration: '7 days',
    location: 'Bali, Indonesia',
    featureImage: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
    ]
  },
  {
    title: 'Adventure Trek in Nepal',
    category: 'Adventure',
    description: 'Embark on an unforgettable trek through the majestic Himalayas. Experience breathtaking mountain views, local culture, and challenging trails for adventure enthusiasts.',
    price: 134850,
    duration: '10 days',
    location: 'Nepal',
    featureImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1464822759844-d150baec0134?w=800&h=600&fit=crop'
    ]
  },
  {
    title: 'Cultural Heritage in Kyoto',
    category: 'Cultural',
    description: 'Immerse yourself in Japanese culture with visits to ancient temples, traditional gardens, and authentic tea ceremonies. Experience the beauty of cherry blossoms in spring.',
    price: 224850,
    duration: '8 days',
    location: 'Kyoto, Japan',
    featureImage: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop'
    ]
  },
  {
    title: 'City Lights of New York',
    category: 'City',
    description: 'Explore the vibrant city that never sleeps. Visit iconic landmarks, world-class museums, Broadway shows, and enjoy the diverse culinary scene of Manhattan.',
    price: 269850,
    duration: '6 days',
    location: 'New York City, USA',
    featureImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop'
    ]
  },
  {
    title: 'Wildlife Safari in Kenya',
    category: 'Nature',
    description: 'Witness the incredible wildlife of Africa in their natural habitat. Spot the Big Five, experience traditional Maasai culture, and enjoy stunning savanna landscapes.',
    price: 329850,
    duration: '12 days',
    location: 'Kenya',
    featureImage: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop'
    ]
  },
  {
    title: 'Luxury Maldives Escape',
    category: 'Luxury',
    description: 'Indulge in ultimate luxury with overwater bungalows, private infinity pools, world-class spa treatments, and exclusive dining experiences in paradise.',
    price: 524850,
    duration: '7 days',
    location: 'Maldives',
    featureImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop'
    ]
  }
];

export async function seedDatabase() {
  try {
    await connectDB();

    // Clear existing packages
    await Package.deleteMany({});

    // Insert sample packages
    const packages = await Package.insertMany(samplePackages);

    console.log(`Successfully seeded ${packages.length} packages`);
    return packages;
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

// Run seed if this file is executed directly
if (require.main === module) {
  seedDatabase()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
} 