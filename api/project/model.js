const db = require('../../data/dbConfig');

function get() {
  return db('projects');
}

function getById(id) {
  return db('projects').where('project_id', id).first();
}

module.exports = {
  get,
  getById,
};
