const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

// Middleware, um JSON-Daten zu parsen
app.use(express.json());

// Importiere die Routen
const indexRouter = require('./routes/index');
app.use('/api', indexRouter);

// Starte den Server
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
