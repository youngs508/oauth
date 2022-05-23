var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('root');
});

app.post('/about', (req, res) => {
    res.send('about');
});