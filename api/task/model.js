const db = require('../../data/dbConfig');

function get() {
  return db('tasks');
}

function getById(id) {
  return db('task').where('task_id', id).first();
}

function create(task) {
  return db('tasks')
    .insert(task)
    .then((ids) => {
      return getById(ids[0]);
    });
}

function update(id, task) {
  return db('tasks')
    .where('task_id', id)
    .update(task)
    .then(() => {
      return db('tasks').where('task_id', id).first();
    });
}

function remove(id) {
  return db('tasks')
    .where('task_id', id)
    .del()
    .then(() => {
      return db('tasks');
    });
}

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
};
