const db = require("../models");
const Issue = db.issues;
//const StatusType = require("../lib/StatusType");

exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title
  //   ? { title: { $regex: new RegExp(title), $options: "i" } }
  //   : {};
  let filter = {};
  if(req.query.vars) filter = JSON.parse(req.query.vars);
  //TODO: should be simpler
  let query = {};
  if(filter.status !== undefined) query.status = filter.status;
  if(filter.effortMin !== undefined) query.effortMin = {$lte : filter.effortMin};
  if(filter.effortMax !== undefined) query.effortMax = {$gte : filter.effortMax};
  
  Issue.find( query )
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
  console.log(req.body);
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
    description: "description",
    effortMin: 2,
    effortMax: 20
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

   const filter = { "id" : req.params.id};
   
   Issue.findOne(filter)
   .then((data) => {
     if(!data)
     res.status(404).send({ message: "Not found issue with id " + id });
    else res.send(data);
    })
    .catch((err) => {
      res
      .status(500)
      .send({ message: "Error retrieving Issue with id=" + id});
    });
};

