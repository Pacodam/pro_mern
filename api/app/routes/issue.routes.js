// These are our routes:

// /api/issues: GET, POST, DELETE
// /api/issues/:id: GET, PUT, DELETE
// /api/issues/published: GET

module.exports = app => {
   
    const issues = require("../controllers/issue.controller");

    var router = require("express").Router();

    router.post("/", issues.create);

    router.get("/", issues.findAll);

    app.use('/api/issues', router);
}