const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/item');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.get('/', (req, res) => {
    res.send('Welcome to the inventory API');
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        error: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});