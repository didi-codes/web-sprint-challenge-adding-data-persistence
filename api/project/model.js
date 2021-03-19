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

function update(id, project) {
  return db('projects')
    .where('project_id', id)
    .update(project)
    .then(() => {
      return db('projects').where('project_id', id).first();
    });
}

function remove(id) {
    return db('projects')
    .where('project_id', id)
    .del()
    .then(() => {
        return db('projects')
    })
}

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
};
