
exports.up = function (knex) {
  return knex.schema
  .createTable('projects', (tbl) => {
    tbl.increments('project_id');
    tbl.string('project_name', 128).notNullable();
    tbl.text('project_description');
    tbl.boolean('project_completed').setdefault(false);
  })
  .createTable('resources', (tbl) => {
    tbl.increments('resource_id');
    tbl.string('resource_name', 128).notNullable().unique()
    tbl.text('resource_description');
  });
  
  

};

exports.down = function(knex) {
  
};
