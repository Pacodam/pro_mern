const express = require('express');

const app = express();

app.use(express.static('public'));

require('dotenv').config();

//¿is this required?
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const port = process.env.UI_SERVER_PORT || 8000;

//continues with page 183
const UI_API_ENDPOINT = process.env.UI_API_ENDPOINT || 'http://localhost:3000/api';
const env = { UI_API_ENDPOINT };

app.get('/env.js', function(req, res) {
    res.send(`window.ENV = ${JSON.stringify(env)}`)
    });

// const cors = require('cors');
// var corsOptions = {
//   origin: "http://localhost:3000"
// };
// app.use(cors(corsOptions));

app.listen(port, function () {
    console.log(`UI server started on port ${port}`);
});

