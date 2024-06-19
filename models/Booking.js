const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    passport: { type: String, required: true },
    departureCity: { type: String, required: true },
    destinationCity: { type: String, required: true },
    date: { type: Date, required: true },
    flightId: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight', required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: 'booked' },
});

module.exports = mongoose.model('Booking', BookingSchema);


