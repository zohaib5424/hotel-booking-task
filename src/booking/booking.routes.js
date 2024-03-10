import express from 'express';
import BookingController from './booking.controller.js';
import BookingValidationSchema from './booking.validation.js';
import Validation from '../middleware/validation.middleware.js';

const router = express.Router();

// Create a new booking
router.post(
  '/',
  Validation.validate(BookingValidationSchema.createBookingSchema, 'body'),
  BookingController.createBooking
);
// Get a booking by ID
router.get('/allBooking', BookingController.getAllBooking);
// Get a booking by ID
router.get(
  '/:id',
  Validation.validate(BookingValidationSchema.getBookingByIDSchema, 'params'),
  BookingController.getBookingByID
);

// Update a booking by ID
router.put(
  '/',
  Validation.validate(BookingValidationSchema.updateBookingSchema, 'body'),
  BookingController.updateBooking
);

// Delete a booking by ID
router.delete(
  '/:id',
  Validation.validate(BookingValidationSchema.getBookingByIDSchema, 'params'),
  BookingController.deleteBooking
);
export default router;
