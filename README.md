# Wanderlust Voyages Web Application

A modern travel booking platform built with Next.js, featuring curated travel package listings, user authentication, and seamless booking functionality.

## Features

- **Travel Package Listings**: Browse and filter travel packages by category
- **Package Details**: View detailed information about each travel package
- **User Authentication**: Secure login and registration system
- **Booking System**: Book travel packages with date and passenger selection
- **User Dashboard**: View and manage your bookings
- **Responsive Design**: Mobile-friendly interface
- **Modern UI**: Beautiful and intuitive user interface

## Tech Stack

- **Frontend**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **Authentication**: JWT-based authentication
- **Database**: MongoDB with Mongoose ODM
- **Language**: TypeScript

## Prerequisites

- Node.js 18+ 
- MongoDB (local or cloud instance)
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd travel-agency-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/travel-agency
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-nextauth-secret-key
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system or use a cloud instance.

5. **Seed the database**
   ```bash
   # Start the development server first
   npm run dev
   
   # Then seed the database (in a new terminal)
   curl -X POST http://localhost:3000/api/seed
   ```

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   ├── bookings/      # Booking endpoints
│   │   ├── packages/      # Package endpoints
│   │   └── seed/          # Database seeding
│   ├── auth/              # Authentication page
│   ├── dashboard/         # User dashboard
│   ├── packages/          # Package detail pages
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── auth/              # Authentication components
│   ├── booking/           # Booking components
│   ├── packages/          # Package components
│   └── Navigation.tsx     # Navigation component
├── contexts/              # React contexts
│   └── AuthContext.tsx    # Authentication context
├── lib/                   # Utility libraries
│   ├── auth.ts            # Authentication utilities
│   ├── mongodb.ts         # Database connection
│   └── seed.ts            # Database seeding
└── models/                # MongoDB models
    ├── Booking.ts         # Booking model
    ├── Package.ts         # Package model
    └── User.ts            # User model
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Packages
- `GET /api/packages` - Get all packages (with optional category filter)
- `GET /api/packages/:id` - Get package by ID

### Bookings
- `POST /api/bookings` - Create a new booking (requires authentication)
- `GET /api/bookings` - Get user's bookings (requires authentication)

### Database
- `POST /api/seed` - Seed the database with sample packages

## Usage

### For Users

1. **Browse Packages**: Visit the homepage to see all available travel packages
2. **Filter Packages**: Use the category filter to find specific types of trips
3. **View Details**: Click on any package to see detailed information
4. **Register/Login**: Create an account or log in to book packages
5. **Book a Trip**: Select travel dates and number of passengers
6. **Manage Bookings**: View your bookings in the dashboard

### For Developers

1. **Adding New Packages**: Use the seed script or add directly to the database
2. **Customizing Styles**: Modify Tailwind classes in components
3. **Extending Features**: Add new API endpoints and components as needed

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Railway
- Render
- Netlify
- AWS
- DigitalOcean

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |
| `JWT_SECRET` | Secret key for JWT tokens | Yes |
| `NEXTAUTH_URL` | NextAuth.js URL | No |
| `NEXTAUTH_SECRET` | NextAuth.js secret | No |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the GitHub repository or contact the development team.
