const db = require("../database/connection");

module.exports = async function checkTaskExistence(req, res, next) {
  const taskId = req.body.taskId;

  const response = await db("tasks")
    .where({ project_id: req.projectId })
    .where({ id: taskId });

  if (response.length != 0) {
    req.taskId = taskId;
    return next();
  }

  return res.status(404).send("Task not found!");
};
