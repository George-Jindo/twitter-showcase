require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const port = process.env.PORT || 5000;

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
            //console.log(response.data.statuses);
        })
        .catch(error => {
            res.sendStatus(500);
        });
});

// Send a GET request to /api/random to VIEW a random tweet
app.get('/api/random/', (req, res) => {
    function count(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const url = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${req.query.screen_name}&count=20`;

    const config = {
        headers: {
            Authorization:
                'Bearer ' + process.env.REACT_APP_TWITTER_BEARER_TOKEN
        }
    };

    axios
        .get(url, config, count)
        .then(response => {
            res.send(response.data[count(response.data.length)]);
            //console.log(response);
        })
        .catch(error => {
            res.sendStatus(500);
        });
});

/*
// serve static build files from React app
app.use('/js', express.static(path.join(__dirname, 'react/build/static/js')));
app.use(
    '/manifest.json',
    express.static(path.join(__dirname, 'react/build/manifest.json'))
);
app.use(
    '/media',
    express.static(path.join(__dirname, 'react/build/static/media'))
);
app.use('/images', express.static(path.join(__dirname, 'react/build/images')));
*/

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// create a GET route
/*app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'React', 'build', 'index.html'));
});
*/
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
