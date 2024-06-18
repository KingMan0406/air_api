const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const mongoose = require('mongoose');

const mongoURI = process.env.DATABASE_URL || 'mongodb+srv://kingman0406:<inai2203114>@cluster0.cnonrgv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});


// Routes
app.use('/api', require('./routes/api'));

const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
