
exports.up = function (knex) {
  return knex.schema
  .createTable('projects', (tbl) => {
    tbl.increments('project_id');
    tbl.string('project_name', 128).notNullable();
    tbl.text('project_description');
    tbl.boolean('project_completed').setdefault(false);
  });
  
  

};

exports.down = function(knex) {
  
};
