// https://github.com/vasansr/pro-mern-stack-2
// npm run watch     npm start
const express = require("express");
const app = express();
const fileServerMiddleware = express.static("public");
const fs = require('fs');
app.use("/", fileServerMiddleware);

const bodyParser = require("body-parser");
//parse requests of content-type -application/json

app.use(bodyParser.json());
//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));


//option for enabling cors
const cors = require('cors');
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));



require('dotenv').config();


const issuesDB = [
  {
    id: 1,
    status: "New",
    owner: "Ravan",
    effort: 5,
    created: new Date("2018-08-15"),
    due: undefined,
    title: "Error in console when clicking Add",
  },
  {
    id: 2,
    status: "Assigned",
    owner: "Eddie",
    effort: 14,
    created: new Date("2019-01-16"),
    due: new Date("2019-02-01"),
    title: "Missing bottom border on panel",
  },
];



const url = process.env.DB_URL || 'mongodb://localhost/issuetracker';
const port = process.env.API_SERVER_PORT || 8000;

app.listen(port, function () {
  console.log(`API server started on port ${port}`);
});

app.get("/testParams/:id", (req, res) => {
  console.log("id is: ", req.params.id);
});
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/pro-mern", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//get issues
app.get("/api/issues", (req, res) => {
  res.json({ issues: issuesDB });
});

app.post("/api/issue", (req, res) => {
  console.log("post?", req.body)
  const issue = {
    id: req.body.id,
    status: "New",
    owner: req.body.owner,
    effort: 5,
    created: new Date(req.body.created),
    due: new Date(),
    title: req.body.title,
  }
  issuesDB.push(issue);
  console.log(issuesDB);
})

//UI_API_ENDPOINT=http://localhost:3000/graphql

// //create issue
// const routes = [
//     { path: '/issues/:id?', component: IssueList },
//     { path: '/edit/:id', component: IssueEdit },
//     { path: '/report', component: IssueReport },
//     { path: '/about', component: About },
//     { path: '*', component: NotFound },
//   ];

//   export default routes;
