const express = require('express');
const app = express();
const cors = require('cors');
const jsonParser = express.json({strict: false});
const port = 3000;

app.use(jsonParser);
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/lower', function (req, res) {
    console.log(req.body);
    res.json(req.body.toLowerCase());
});

app.post('/upper', function (req, res) {
    console.log(req.body);
    res.json(req.body.toUpperCase());
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});