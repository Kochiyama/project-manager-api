const db = require("../database/connection");

module.exports = class ProjectsController {
  async listAll(req, res) {
    const response = await db("projects");

    return res.status(200).json(response);
  }

  async create(req, res) {
    const newProjectTitle = req.body.title;

    await db("projects").insert({ title: newProjectTitle });

    return res.status(201).json({
      message: `Project '${newProjectTitle}' created with success!`,
    });
  }

  async read(req, res) {
    const response = await db("projects").where({ id: req.projectId });

    return res.status(200).json(response);
  }

  async update(req, res) {
    const newTitle = req.body.title;

    await db("projects")
      .where({ id: req.projectId })
      .update({ title: newTitle });

    return res.status(201).send();
  }

  async delete(req, res) {
    await db("projects").where({ id: req.projectId }).del();

    return res.status(200).send();
  }
};
