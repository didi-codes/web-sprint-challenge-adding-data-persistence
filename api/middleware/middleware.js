const Project = require('../project/model');

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

module.exports = {
  validateProjectId,
  validateProject,
};
