const db = require('../../data/dbConfig');

function get() {
  return db('resources');
}

function getById(id) {
  return db('resources').where('resource_id', id).first();
}

function create(resource) {
  return db('resources')
    .insert(resource)
    .then((ids) => {
      return getById(ids[0]);
    });
}

function update(id, resource) {
  return db('resources')
    .where('resource_id', id)
    .update(resource)
    .then(() => {
      return db('resources').where('resource_id', id).first();
    });
}

function remove(id) {
    return db('resources')
    .where('resource_id', id)
    .del()
    .then(() => {
        return db('resources')
    })
}

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
};
