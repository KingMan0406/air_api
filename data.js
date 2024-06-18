const mongoose = require('mongoose');
const Flight = require('./models/Flight');
require('dotenv').config();

const mongoURI = process.env.DATABASE_URL;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB');
    
    const flights = [
        {
            flightNumber: 'A123',
            departureCity: 'New York',
            destinationCity: 'London',
            departureTime: new Date('2024-07-01T10:00:00Z'),
            arrivalTime: new Date('2024-07-01T18:00:00Z'),
            price: 500
        },
        {
            flightNumber: 'B456',
            departureCity: 'Paris',
            destinationCity: 'Tokyo',
            departureTime: new Date('2024-07-05T14:00:00Z'),
            arrivalTime: new Date('2024-07-06T08:00:00Z'),
            price: 700
        }
    ];

    try {
        await Flight.insertMany(flights);
        console.log('Flights added to database');
        process.exit(0);
    } catch (error) {
        console.error('Error adding flights:', error);
        process.exit(1);
    }
});
