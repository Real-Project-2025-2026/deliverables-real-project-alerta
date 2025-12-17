const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(cors()); // Erlaubt Kommunikation zwischen HTML, App und Server
app.use(bodyParser.json());

// EURE SEVEN.IO API KEY HIER EINFÜGEN
const SEVEN_IO_API_KEY = 'J5pdYgaKfDw2rTtvMjN2AvXVXcVOhOHUBzcOpHOZ07fM3VChZSYDg2yp4hlObDOF'; 

// Hier speichern wir die Notfallnummer temporär (im RAM)
// Standardmäßig eine Testnummer, falls noch nichts konfiguriert wurde
let currentEmergencyNumber = '+491724977575'; 

// 1. Endpunkt: App sendet die konfigurierte Nummer hierhin
app.post('/api/config', (req, res) => {
    const { number } = req.body;
    if (number) {
        currentEmergencyNumber = number;
        console.log(`[Server] Neue Notfallnummer gespeichert: ${currentEmergencyNumber}`);
        res.json({ success: true, message: 'Nummer aktualisiert' });
    } else {
        res.status(400).json({ success: false, message: 'Keine Nummer angegeben' });
    }
});

// 2. Endpunkt: HTML-Device löst diesen Endpunkt aus
app.post('/api/sos', async (req, res) => {
    const { lat, long } = req.body;
    
    if (!currentEmergencyNumber) {
        return res.status(400).json({ success: false, message: 'Keine Notfallnummer konfiguriert!' });
    }

    const text = `ALERTA SOS! Ich brauche Hilfe. Mein Standort: https://maps.google.com/?q=${lat},${long}`;
    console.log(`[Server] Sende SMS an ${currentEmergencyNumber}: "${text}"`);

    try {
        // Anfrage an seven.io
        const response = await axios.post('https://gateway.seven.io/api/sms', {
            to: currentEmergencyNumber,
            text: text,
            from: 'Alerta', // Absendername (max 11 Zeichen, muss bei seven.io freigeschaltet sein, sonst weglassen)
            json: 1
        }, {
            headers: {
                'X-Api-Key': SEVEN_IO_API_KEY,
                'Content-Type': 'application/json'
            }
        });

        console.log('[Server] SMS Status:', response.data);
        res.json({ success: true, data: response.data });

    } catch (error) {
        console.error('[Server] Fehler beim SMS Versand:', error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Alerta Server läuft auf http://localhost:3000');
});