const express = require("express");
const router = express.Router();

const checkProjectExistence = require("./middlewares/projectChecker");
const checkTaskExistence = require("./middlewares/taskChecker");
const ProjectsController = require("./controllers/PojectsController");
const TasksController = require("./controllers/TasksControler");

const projectsController = new ProjectsController();
const tasksController = new TasksController();

// list all projects
router.get("/", projectsController.listAll);

// creates a project
router.post("/project", projectsController.create);

// see a project with given id
router.get("/project", checkProjectExistence, projectsController.read);

// update a project name
router.put("/project", checkProjectExistence, projectsController.update);

// delete project
router.delete("/project", checkProjectExistence, projectsController.delete);

// create a task for a project (by id)
router.post("/project/task", checkProjectExistence, tasksController.create);

// list taks of a project
router.get("/project/task", checkProjectExistence, tasksController.read);

// update a task
router.put(
  "/project/task",
  checkProjectExistence,
  checkTaskExistence,
  tasksController.update
);

// delete a task
router.delete(
  "/project/task",
  checkProjectExistence,
  checkTaskExistence,
  tasksController.delete
);

module.exports = router;
