const express = require('express');
const Project = require('./model');
const { validateProjectId, validateProject } = require('../middleware/middleware');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const data = await Project.get();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', validateProjectId, (req, res , next) => {
  res.status(200).json(req.project);
});

router.post('/', validateProject, (req, res, next) => {
  Project.create(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      next(err)
    });
});

router.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
