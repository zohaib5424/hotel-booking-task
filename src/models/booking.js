// import mongoose from 'mongoose';

// import { v1 as uuidv1 } from 'uuid';

// /**
//  * Booking Schema
//  */
// const bookingSchema = new mongoose.Schema({
//   bookingId: { type: String, default: _ => uuidv1() },
//   hotelName: { type: String, required: true },
//   guestName: { type: String, required: true },
//   message: { type: String, required: true },

//   checkInDate: { type: Date },
//   checkOutDate: { type: Date },
// });

// export default mongoose.model('Booking', bookingSchema);

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
