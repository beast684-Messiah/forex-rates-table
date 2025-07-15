require('dotenv').config();
const express = require('express');
const https = require('https');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Get API key from environment variables
const API_KEY = process.env.FIXER_API_KEY;

if (!API_KEY) {
    console.error('Error: Please set FIXER_API_KEY in .env file');
    process.exit(1);
}

// Serve static files
app.use(express.static(path.join(__dirname)));

// Explicit route for root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API proxy endpoint
app.get('/api/rates', (req, res) => {
    const options = {
        hostname: 'api.apilayer.com',
        path: '/fixer/latest',
        method: 'GET',
        headers: {
            'apikey': API_KEY
        }
    };

    const apiRequest = https.request(options, (apiResponse) => {
        let data = '';

        apiResponse.on('data', (chunk) => {
            data += chunk;
        });

        apiResponse.on('end', () => {
            res.setHeader('Content-Type', 'application/json');
            res.send(data);
        });
    });

    apiRequest.on('error', (error) => {
        console.error('API request failed:', error);
        res.status(500).json({ error: 'Failed to fetch exchange rates' });
    });

    apiRequest.end();
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// Export for Vercel
module.exports = app; 