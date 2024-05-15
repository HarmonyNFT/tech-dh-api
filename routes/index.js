const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const router = express.Router();



router.get('/', (req, res) => {
    res.json({ message: 'Willkommen zu meiner API!' });
});

// Wetterroute (Beispiel)
router.get('/weather/:city', async (req, res) => {

    const city = req.params.city;
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

       try {
        const response = await axios.get(url);
        const data = response.data;
        const weatherData = {
            city: data.location.name,
            temperature: data.current.temp_c,
            condition: data.current.condition.text,
            icon: data.current.condition.icon,
        };
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: 'Fehler beim Abrufen der Wetterdaten' });
    }
});

router.get('/pokemon/:pokemon', async (req, res) => {

    const pokemon = req.params.pokemon;
    
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

       try {
        const response = await axios.get(url);
        const data = response.data;


        
        const pokemonData = {
            name: data.name,
            number: data.id,
            icon: data.sprites.front_default,
       
        };
        res.json(pokemonData);
    } catch (error) {
        res.status(500).json({ error: 'Fehler beim Abrufen der Pokemondaten' });
    }
});


module.exports = router;
