const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
    flightNumber: String,
    departureCity: String,
    destinationCity: String,
    departureTime: Date,
    arrivalTime: Date,
    price: Number,
});

module.exports = mongoose.model('Flight', FlightSchema);
