const db = require("../models");
const Issue = db.issues;
//const StatusType = require("../lib/StatusType");

exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title
  //   ? { title: { $regex: new RegExp(title), $options: "i" } }
  //   : {};
  let filter = {};
  if (req.query.vars) filter = JSON.parse(req.query.vars);
  //TODO: should be simpler
  let query = {};
  //console.log(filter);
  if (filter.status !== undefined) query.status = filter.status;
  if (filter.effortMin !== undefined) query.effort = { $lte: filter.effortMin };
  if (filter.effortMax !== undefined) query.effort = { $gte: filter.effortMax };
  //TODO: effort, how to generate filter?
  // query.effort = {};
  // if(filter.effortMin !== undefined) query.effort.$lte = filter.effortMin;
  // if(filter.effortMax !== undefined) query.effort.$gte = filter.effortMax;

  // db.student.find({ u1 : { $gt :  30, $lt : 60}});
  //console.log(query);
  Issue.find(query)
    .then((data) => {
      //console.log(data);
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
  //console.log(req.body);
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  //console.log(req.body.due);
  // Create a Issue
  const issue = new Issue({
    id: req.body.id,
    status: "New",
    owner: req.body.owner,
    created: new Date(req.body.created),
    due: new Date(req.body.created),
    title: req.body.title,
    description: "description",
    effort: req.body.effort,
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

exports.findOne = (req, res) => {
  const filter = { id: req.params.id };

  Issue.findOne(filter)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found issue with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Issue with id=" + id });
    });
};

// Update an Issue by the id in the request
exports.update = (req, res) => {
  //console.log("update")
  //console.log(req.body)
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Issue.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Issue with id=${id}. Maybe Issue was not found!`,
        });
      } else res.send({ message: "Issue was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Issue with id=" + id,
      });
    });
};

// findOneAndDelete() returns the deleted document after having deleted it (in case you need its contents after the delete operation);
// deleteOne() is used to delete a single document
// remove() is a deprecated function and has been replaced by deleteOne() (to delete a single document) and deleteMany() (to delete multiple documents)
//Delete an Issue by the id in the request
//TODO:
exports.delete = (req, res) => {
  const id = req.params.id;

  //Issue.deleteOne({_id : id}) //this works, which one is better
  Issue.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      //console.log(data);
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Issue with id=${id}. Maybe Issue was not found!`,
        });
      } else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Issue with id=" + id,
      });
    });
};

exports.countIssues = (req, res) => {
  Issue.countDocuments()
    .then((data) => {
      console.log(data);
      res.send(data.toString());
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not count issues",
      });
    });
};
