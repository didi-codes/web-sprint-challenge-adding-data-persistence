const db = require('../../data/dbConfig');

function get() {
  return db('projects');
}

function getById(id) {
  return db('projects').where('project_id', id).first();
}

function create(project) {
  return db('projects')
    .insert(project)
    .then((ids) => {
      return getById(ids[0]);
    });
}

module.exports = {
  get,
  getById,
  create,
};
