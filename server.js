const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const name = 'https://api.twitter.com/1.1/search/tweets.json?q=cars';

// test api
app.get('/api/tweet', (req, res) => {
    res.send(url);
});


// serve static build files from React app
app.use('/static', express.static(path.join(__dirname, 'react/build/static')));
app.use('/images', express.static(path.join(__dirname, 'react/build/images')));

// create a GET route
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'React', 'build', 'index.html'));
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));