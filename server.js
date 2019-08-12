const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const port = process.env.PORT || 5000;

const name = {
    "First_Name": "George",
    "Last_Name": "Jindo"
};

// test api
app.get('/api/test', (req, res) => {
    res.send(name);
});

// serve static build files from React app
app.use('/static', express.static(path.join(__dirname, 'react/build/static')));
app.use('/images', express.static(path.join(__dirname, 'react/build/images')));

// create a GET route
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'React', 'build', 'index.html'));
    console.log("It works!");
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));