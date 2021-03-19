const express = require('express');
const Task = require('./model');
const { validateTaskId, validateTask } = require('../middleware/middleware');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const data = await Task.get();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', validateTaskId, (req, res) => {
  res.status(200).json(req.task);
});

router.post('/', validateTask, (req, res, next) => {
  Task.create(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      next(err);
    });
});

router.put('/:id', validateTask, validateTaskId, (req, res, next) => {
  Task.update(req.params.id, req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/:id', validateTaskId, (req, res, next) => {
  Task.remove(req.params.id)
    .then(() => {
      res.status(200).json({
        message: 'The Task has been deleted',
      });
    })
    .catch((err) => {
      next(err);
    });
});

router.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
