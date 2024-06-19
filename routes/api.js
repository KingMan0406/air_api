const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight');
const Booking = require('../models/Booking');

// Get all flights
router.get('/flights', async (req, res) => {
    try {
        const flights = await Flight.find();
        res.json(flights);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single flight by ID
router.get('/flights/:id', async (req, res) => {
    try {
        const flight = await Flight.findById(req.params.id);
        if (flight == null) {
            return res.status(404).json({ message: 'Flight not found' });
        }
        res.json(flight);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Book a ticket
router.post('/bookTicket', async (req, res) => {
    const { firstName, lastName, phone, passport, departureCity, destinationCity, date, flightId, amount } = req.body;

    const booking = new Booking({
        firstName,
        lastName,
        phone,
        passport,
        departureCity,
        destinationCity,
        date,
        flightId,
        amount,
    });

    try {
        const newBooking = await booking.save();
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

