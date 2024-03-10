import Joi from '@hapi/joi';
const BookingValidationSchema = {};
// Validation schema for creating a booking
BookingValidationSchema.createBookingSchema = Joi.object({
  hotelName: Joi.string().required(),
  guestName: Joi.string().allow('').optional(),
  message: Joi.string().allow('').optional(),
  checkInDate: Joi.date().required(),
  checkOutDate: Joi.date()
    .required()
    .greater(Joi.ref('checkInDate'))
    .message('checkOutDate must be greater than checkInDate'),
});

// Validation schema for updating a booking
BookingValidationSchema.updateBookingSchema = Joi.object({
  id: Joi.string().required(),
  hotelName: Joi.string().optional(),
  guestName: Joi.string().allow('').optional(),
  message: Joi.string().allow('').optional(),
  checkInDate: Joi.date().optional(),
  checkOutDate: Joi.date()
    .optional()
    .greater(Joi.ref('checkInDate'))
    .message('checkOutDate must be greater than checkInDate'),
});

// Validation schema for getting a booking by ID
BookingValidationSchema.getBookingByIDSchema = Joi.object({
  id: Joi.string().required(),
});

export default BookingValidationSchema;
