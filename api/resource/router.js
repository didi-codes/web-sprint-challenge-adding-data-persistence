const express = require('express');
const Resource = require('./model');
const {
  validateResourceId,
  validateResource,
} = require('../middleware/middleware');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const data = await Resource.get();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', validateResourceId, (req, res) => {
  res.status(200).json(req.resource);
});

router.post('/', validateResource, (req, res, next) => {
  Resource.create(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      next(err);
    });
});

router.put('/:id', validateResource, validateResourceId, (req, res, next) => {
  Resource.update(req.params.id, req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/:id', validateResourceId, (req, res, next) => {
  Resource.remove(req.params.id)
    .then(() => {
      res.status(200).json({
        message: 'The Resource has been deleted',
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
