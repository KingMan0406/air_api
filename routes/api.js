const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight');
const Booking = require('../models/Booking');

// Add a new flight
router.post('/addFlight', async (req, res) => {
    const flight = new Flight(req.body);
    try {
        const savedFlight = await flight.save();
        res.status(201).json(savedFlight);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Search flights
router.post('/searchFlights', async (req, res) => {
    const { departureCity, destinationCity } = req.body;
    try {
        const flights = await Flight.find({ departureCity, destinationCity });
        res.json(flights);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get upcoming flights
router.get('/upcomingFlights', async (req, res) => {
    try {
        const flights = await Flight.find({ departureTime: { $gte: new Date() } });
        res.json(flights);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Book a ticket
router.post('/bookTicket', async (req, res) => {
    const booking = new Booking(req.body);
    try {
        const savedBooking = await booking.save();
        res.status(201).json(savedBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Cancel a booking
router.post('/cancelBooking', async (req, res) => {
    const { bookingId } = req.query;
    try {
        const booking = await Booking.findById(bookingId);
        if (booking) {
            booking.status = 'cancelled';
            const refundAmount = booking.amount * 0.5;
            await booking.save();
            res.json({ message: `Booking cancelled. Refund amount: ${refundAmount}` });
        } else {
            res.status(404).json({ message: 'Booking not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;

