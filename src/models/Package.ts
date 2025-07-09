import mongoose from 'mongoose';

const PackageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this package'],
    maxlength: [60, 'Title cannot be more than 60 characters'],
  },
  category: {
    type: String,
    required: [true, 'Please provide a category for this package'],
    enum: ['Adventure', 'Beach', 'Cultural', 'City', 'Nature', 'Luxury'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for this package'],
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price for this package'],
    min: [0, 'Price cannot be negative'],
  },
  duration: {
    type: String,
    required: [true, 'Please provide duration for this package'],
  },
  location: {
    type: String,
    required: [true, 'Please provide location for this package'],
  },
  featureImage: {
    type: String,
    required: [true, 'Please provide a feature image for this package'],
  },
  images: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Package || mongoose.model('Package', PackageSchema); 