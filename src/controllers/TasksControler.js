const db = require("../database/connection");

module.exports = class TasksController {
  async create(req, res) {
    console.log(req.projectId);

    await db("tasks").insert({
      project_id: req.projectId,
      task: req.body.task,
    });

    return res.status(201).send("Created task");
  }

  async read(req, res) {
    const response = await db("tasks").where({ project_id: req.projectId });

    return res.json(response);
  }

  async update(req, res) {
    await db("tasks")
      .where({ project_id: req.projectId })
      .where({ id: req.taskId })
      .update({ task: req.body.task });

    return res.status(201).send("Task Updated");
  }

  async delete(req, res) {
    await db("tasks")
      .where({ project_id: req.projectId })
      .where({ id: req.body.taskId })
      .del();

    return res.status(201).send("Task Deleted");
  }
};
