import Booking from '../models/booking.js';
const BookingServices = {};
// Create a new booking
BookingServices.createBooking = async bookingData => {
  return await Booking.create(bookingData);
};

// Get a single booking by ID
BookingServices.getBookingByID = async bookingID => {
  return await Booking.findById(bookingID);
};

// Get a all booking
BookingServices.getAllBooking = async () => {
  return await Booking.find({});
};

// Update a booking by ID
BookingServices.updateBooking = async (bookingID, updatedData) => {
  return await Booking.findByIdAndUpdate(bookingID, updatedData, { new: true });
};

// Delete a booking by ID
BookingServices.deleteBooking = async bookingID => {
  return await Booking.findByIdAndDelete(bookingID);
};

export default BookingServices;
