const db = require("../database/connection");

module.exports = async function checkProjectExistence(req, res, next) {
  const projectId = req.body.projectId;

  if (projectId) {
    const response = await db("projects").where({ id: projectId });
    if (response) {
      req.projectId = projectId;
      return next();
    }
  }
  return res.status(404).send("Project not found!");
};
