const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = 3000;

app.use(cors({
    origin: '*' // Replace with your allowed origin
  }));

// Middleware, um JSON-Daten zu parsen
app.use(express.json());

// Importiere die Routen
const indexRouter = require('./routes/index');
app.use('/api', indexRouter);

// Starte den Server
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
