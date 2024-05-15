const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();
const port = 3000;

app.use(cors({
    origin: '*' // Replace with your allowed origin
  }));


app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100, 
  message: 'Too many requests from this IP, please try again after 15 minutes'
});

app.use(limiter);

// Importiere die Routen
const indexRouter = require('./routes/index');
app.use('/api', indexRouter);

// Starte den Server
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
