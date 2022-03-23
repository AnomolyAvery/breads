const express = require('express');

require('dotenv').config();

const port = process.env.PORT;
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!');
});

app.use('/breads', require('./controllers/breadsController'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
