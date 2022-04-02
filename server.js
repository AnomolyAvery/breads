require('dotenv').config();

const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) console.log(err);
        else console.log('Connected to MongoDB');
    }
);

const port = process.env.PORT;
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

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
