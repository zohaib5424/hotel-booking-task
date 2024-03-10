import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bookingRoutes from './booking/booking.routes.js';
import connect from './config/mongoose.js';

connect();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Use booking routes
app.use('/bookings', bookingRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
