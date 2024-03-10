import bookingService from './booking.service.js';
const BookingController = {};

// Create a new booking
BookingController.createBooking = async (req, res, next) => {
  try {
    console.log('post api testing');
    const booking = await bookingService.createBooking(req.body);
    res.status(201).json({
      result: 'success',
      code: 201,
      data: booking,
      desc: 'Booking created successfully',
    });
  } catch (error) {
    next(error);
  }
};

// Get all bookings
BookingController.getAllBooking = async (req, res, next) => {
  try {
    const booking = await bookingService.getAllBooking();
    if (!booking) {
      return res.status(404).json({
        result: 'error',
        code: 404,
        desc: 'Bookings not found',
      });
    }
    res.status(200).json({
      result: 'success',
      code: 200,
      data: booking,
    });
  } catch (error) {
    next(error);
  }
};
// Get a single booking by ID
BookingController.getBookingByID = async (req, res, next) => {
  try {
    const booking = await bookingService.getBookingByID(req.params.id);
    if (!booking) {
      return res.status(404).json({
        result: 'error',
        code: 404,
        desc: 'Booking not found',
      });
    }
    res.status(200).json({
      result: 'success',
      code: 200,
      data: booking,
      desc: 'Booking retrieved successfully',
    });
  } catch (error) {
    next(error);
  }
};

// Update a booking by ID
BookingController.updateBooking = async (req, res, next) => {
  try {
    const booking = await bookingService.updateBooking(req.body.id, req.body);
    if (!booking) {
      return res.status(404).json({
        result: 'error',
        code: 404,
        desc: 'Booking not found',
      });
    }
    res.status(200).json({
      result: 'success',
      code: 200,
      data: booking,
      desc: 'Booking updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

// Delete a booking by ID
BookingController.deleteBooking = async (req, res, next) => {
  try {
    const booking = await bookingService.deleteBooking(req.params.id);
    if (!booking) {
      return res.status(404).json({
        result: 'error',
        code: 404,
        desc: 'Booking not found',
      });
    }
    res.status(200).json({
      result: 'success',
      code: 200,
      data: booking,
      desc: 'Booking deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

export default BookingController;
