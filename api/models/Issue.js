const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const IssueSchema = new Schema({
  status : String,
  owner : String,
  created : Date,
  effort : String,
  due : Date,
  title : String
});

const Issue = mongoose.model("Issue", IssueSchema);
module.exports = Issue;
