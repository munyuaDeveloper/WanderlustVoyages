import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please provide a user ID'],
  },
  packageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Package',
    required: [true, 'Please provide a package ID'],
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
  travelDate: {
    type: Date,
    required: [true, 'Please provide a travel date'],
  },
  numberOfPeople: {
    type: Number,
    required: [true, 'Please provide number of people'],
    min: [1, 'Number of people must be at least 1'],
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema); 