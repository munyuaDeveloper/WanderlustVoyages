#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Wanderlust Voyages App...\n');

// Check if .env.local exists
const envPath = path.join(process.cwd(), '.env.local');
if (!fs.existsSync(envPath)) {
  console.log('📝 Creating .env.local file...');

  const envContent = `# MongoDB Connection String
MONGODB_URI=mongodb://localhost:27017/travel-agency

# JWT Secret (generate a strong secret for production)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Next.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key
`;

  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env.local file created successfully!');
} else {
  console.log('✅ .env.local file already exists');
}

console.log('\n📋 Next steps:');
console.log('1. Make sure MongoDB is running');
console.log('2. Run: npm run dev');
console.log('3. In another terminal, seed the database: curl -X POST http://localhost:3000/api/seed');
console.log('4. Open http://localhost:3000 in your browser');
console.log('\n�� Setup complete!'); 