// https://github.com/vasansr/pro-mern-stack-2
// npm run watch     npm start
require('dotenv').config();
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));


// const fileServerMiddleware = express.static("public");
// app.use("/", fileServerMiddleware);
//const fs = require('fs');

//parse requests of content-type -application/json
app.use(bodyParser.json());
//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//console.log(db); ¿how is accessing url?
const db = require('./app/models');

db.mongoose
    .connect(db.url, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(() => {
        console.log("connected to the database!");
    })
    .catch(err => {
        console.log("cannot connect to the database!", err);
        process.exit();
    })

//simple route
app.get("/", (req, res) => {
    res.json({message: "welcome to pro-mern application."});
});

require("./app/routes/issue.routes")(app);

const PORT = process.env.API_SERVER_PORT || 8000;

app.listen(PORT, () => {
  console.log(`API server started on port ${PORT}`);
});

