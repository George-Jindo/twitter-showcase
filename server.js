require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

// Send a GET request to /api/tweets to VIEW a list of tweets
app.get('/api/tweets/', (req, res) => {
    const url = `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.q}&lang=en`;

    const config = {
        headers: {
            Authorization:
                'Bearer ' + process.env.REACT_APP_TWITTER_BEARER_TOKEN
        }
    };

    axios
        .get(url, config)
        .then(response => {
            res.send(response.data.statuses);
        })
        .catch(error => {
            res.sendStatus(500);
        });
});

// Send a GET request to /api/random to VIEW a random tweet
app.get('/api/random/', (req, res) => {
    const url = `https://api.twitter.com/1.1/statuses/user_timeline.json`;

    const config = {
        headers: {
            Authorization:
                'Bearer ' + process.env.REACT_APP_TWITTER_BEARER_TOKEN
        },
        params: {
            count: 20,
            screen_name: req.query.screen_name
        }
    };

    axios
        .get(url, config, count)
        .then(response => {
            const randomIndex = Math.floor(
                Math.random() * Math.floor(response.data.length)
            );
            res.send(response.data[randomIndex]);
        })
        .catch(error => {
            res.sendStatus(500);
        });
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
