const express = require('express');

require('dotenv').config();

const port = process.env.PORT;
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!');
});

app.use('/breads', require('./controllers/breadsController'));

app.get('*', (req, res) => {
    res.send(404);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
