const express = require('express');

const app = express();

app.use(express.static('public'));

require('dotenv').config();

const port = process.env.UI_SERVER_PORT || 8000;

// const cors = require('cors');
// var corsOptions = {
//   origin: "http://localhost:3000"
// };
// app.use(cors(corsOptions));

app.listen(port, function () {
    console.log(`UI server started on port ${port}`);
});

