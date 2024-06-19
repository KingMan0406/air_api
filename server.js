require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const flightRoutes = require('./routes/api');  // Предполагается, что ваш маршрутизатор находится в api.js

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const mongoURI = process.env.DATABASE_URL || 'mongodb+srv://kingman0406:inai2203114@cluster0.cnonrgv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', flightRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


