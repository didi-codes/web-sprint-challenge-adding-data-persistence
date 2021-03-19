const db = require('../../data/dbConfig');

function get() {
  return db('projects');
}

module.exports = {
  get,
};
