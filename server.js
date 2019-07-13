const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// serve static build files from React app
app.use('/static', express.static(path.join(__dirname, 'react')));

// create a GET route
app.get('/', (req, res) => {
    res.send({
        express: "Oh Hey Look, It's Working"
    });
});