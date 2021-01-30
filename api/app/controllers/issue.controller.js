const db = require("../models");
const Issue = db.issues;

exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title
  //   ? { title: { $regex: new RegExp(title), $options: "i" } }
  //   : {};
  Issue.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Issue
  const issue = new Issue({
    id: req.body.id,
    status: "New",
    owner: req.body.owner,
    effort: 5,
    created: new Date(req.body.created),
    due: new Date(),
    title: req.body.title,
  });

  // Save Issue in the database
  issue
    .save(issue)
    .then((data) => {
      res.send(data);
      //res.json({ issues: data });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Issue",
      });
    });
};

// //get issues
// app.get("/api/issues", (req, res) => {
//   res.json({ issues: issuesDB });
// });

// app.post("/api/issue", (req, res) => {
//   console.log("post?", req.body)
//   const issue = {
//     id: req.body.id,
//     status: "New",
//     owner: req.body.owner,
//     effort: 5,
//     created: new Date(req.body.created),
//     due: new Date(),
//     title: req.body.title,
//   }
//   issuesDB.push(issue);
//   console.log(issuesDB);
// })

// const issuesDB = [
//   {
//     id: 1,
//     status: "New",
//     owner: "Ravan",
//     effort: 5,
//     created: new Date("2018-08-15"),
//     due: undefined,
//     title: "Error in console when clicking Add",
//   },
//   {
//     id: 2,
//     status: "Assigned",
//     owner: "Eddie",
//     effort: 14,
//     created: new Date("2019-01-16"),
//     due: new Date("2019-02-01"),
//     title: "Missing bottom border on panel",
//   },
// ];
