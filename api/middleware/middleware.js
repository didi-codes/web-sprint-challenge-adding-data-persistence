const Project = require('../project/model');
const Resource = require('../resource/model');
const Task = require('../task/model')

async function validateProjectId(req, res, next) {
  const { id } = req.params;
  try {
    const project = await Project.getById(id);
    if (!project) {
      res.status(404).json({
        message: `The Project ID ${id} does not exist`,
      });
    } else {
      req.project = project;
      next();
    }
  } catch (err) {
    res.status(500).json({
      message: 'Project cannot be found',
    });
  }
}

function validateProject(req, res, next) {
  if (!req.body.project_name) {
    res.status(400).json({
      message: 'Project Name Is Required',
    });
  } else {
    next();
  }
}

async function validateResourceId(req, res, next) {
  const { id } = req.params;
  try {
    const resource = await Resource.getById(id);
    if (!resource) {
      res.status(404).json({
        message: `The Resource ID ${id} does not exist`,
      });
    } else {
      req.resource = resource;
      next();
    }
  } catch (err) {
    res.status(500).json({
      message: 'Resource cannot be found',
    });
  }
}

function validateResource(req, res, next) {
  if (!req.body.resource_name) {
    res.status(400).json({
      message: 'Resource Name Is Required',
    });
  } else {
    next();
  }
}

async function validateTaskId(req, res, next) {
  const { id } = req.params;
  try {
    const task = await Task.getById(id);
    if (!task) {
      res.status(404).json({
        message: `The Task ID ${id} does not exist`,
      });
    } else {
      req.task = task;
      next();
    }
  } catch (err) {
    res.status(500).json({
      message: 'Task cannot be found',
    });
  }
}

function validateTask(req, res, next) {
  if (!req.body.task_description) {
    res.status(400).json({
      message: 'Task Description Is Required',
    });
  } else if (!req.body.project_id) {
    res.status(404).json({
      message: 'Project Id Is Required',
    });
  } else {
    next();
  }
}

module.exports = {
  validateProjectId,
  validateProject,
  validateResourceId,
  validateResource,
  validateTaskId,
  validateTask,
};
