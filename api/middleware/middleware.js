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

module.exports = {
  validateProjectId,
};
