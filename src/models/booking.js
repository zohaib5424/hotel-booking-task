import mongoose from 'mongoose';
const bookingSchema = new mongoose.Schema(
  {
    hotelName: {
      type: String,
      required: true,
      trim: true,
    },
    guestName: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
    },
    checkInDate: {
      type: Date,
      default: Date.now,
    },
    checkOutDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Booking', bookingSchema);
