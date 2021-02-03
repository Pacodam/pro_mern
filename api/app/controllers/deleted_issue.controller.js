const db = require("../models");
const Deleted_Issue = db.delete_issues;

exports.create = (req, res) => {
  console.log("delete issue api")
    console.log(req.body);
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    console.log(req.body.due);
    // Create a Delete Issue
    const deleted_issue = new Deleted_Issue({ ...req.body, deleted : new Date() });
    // Save Deleted_Issue in the database
    deleted_issue
      .save(deleted_issue)
      .then((data) => {
        res.send(data);
        //res.json({ issues: data });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Deleted Issue",
        });
      });
  };
  