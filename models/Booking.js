const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    passport: String,
    departureCity: String,
    destinationCity: String,
    date: Date,
    flightId: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight' },
    amount: Number,
    status: { type: String, default: 'booked' },
});

module.exports = mongoose.model('Booking', BookingSchema);
