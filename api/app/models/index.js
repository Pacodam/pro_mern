const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.issues = require("./issue.model")(mongoose);
db.delete_issues = require("./deleted_issue.model")(mongoose);

module.exports = db;