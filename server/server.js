//https://github.com/vasansr/pro-mern-stack-2
//npm run watch     npm start


const express = require('express');
const app = express();

const fileServerMiddleware = express.static('public');
app.use('/', fileServerMiddleware);
app.use(express.static('pu╓blic'));

app.listen(3000, function(){
    console.log('App started on port 3000');
});


