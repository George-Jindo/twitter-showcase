require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const port = process.env.PORT || 5000;

// Send a GET request to /api/tweets to VIEW a list of tweets
app.get('/api/tweets', (req, res) => {
    const url = 'https://api.twitter.com/1.1/search/tweets.json?q=cars';

    const config = {
        headers: { 'Authorization': "Bearer " + process.env.REACT_APP_TWITTER_BEARER_TOKEN }
    }

    axios.get(url, config)
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            console.log(process.env.REACT_APP_TWITTER_BEARER_TOKEN);
            res.sendStatus(500);
        })
});

// Send a GET request to /api/tweets/tweet/random to VIEW a random tweet

// serve static build files from React app
app.use('/static', express.static(path.join(__dirname, 'react/build/static')));
app.use('/images', express.static(path.join(__dirname, 'react/build/images')));

// create a GET route
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'React', 'build', 'index.html'));
});


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));