require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const port = process.env.PORT || 5000;


// Send a GET request to /api/tweets to VIEW a list of tweets
app.get('/api/tweets/', (req, res) => {
    const url = `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.q}&lang=en`;


    const config = {
        headers: { 'Authorization': "Bearer " + process.env.REACT_APP_TWITTER_BEARER_TOKEN }
    }

    axios.get(url, config)
        .then((response) => {
            res.send(response.data.statuses);
            //console.log(response.data.statuses);
        })
        .catch((error) => {
            res.sendStatus(500);
        })

});


// Send a GET request to /api/tweets/tweet/random to VIEW a random tweet
app.get('/random', function (req, res) {
    let user = req.query.user;
    const action = (error, response) => {
        let tweets = extractTweet(response.body).sort(() => .5 - Math.random()).slice(0, 5);
        res.send(tweets);
    }
    getTimeline(user, action);
});

// serve static build files from React app
app.use('/js', express.static(path.join(__dirname, 'react/build/js')));
app.use('/manifest.json', express.static(path.join(__dirname, 'react/build/manifest.json')));
app.use('/media', express.static(path.join(__dirname, 'react/build/media')));
app.use('/images', express.static(path.join(__dirname, 'react/build/images')));

// create a GET route
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'React', 'build', 'index.html'));
});


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));