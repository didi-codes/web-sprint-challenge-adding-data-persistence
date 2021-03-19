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
      tbl.string('resource_name', 128).notNullable().unique();
      tbl.text('resource_description');
    })
    .createTable('tasks', (tbl) => {
      tbl.increments('task_id');
      tbl.string('task_name', 128).notNullable();
      tbl.text('task_description');
      tbl.boolean('task_completed').setdefault(false);
      tbl
        .integer('project_id')
        .usigned()
        .notNullable()
        .references('project_id')
        .inTable('projects');
    })
    .createTable('project_resources', (tbl) => {
      tbl.increments('project_resource_id');
      tbl
        .integer('project_id')
        .usigned()
        .notNullable()
        .references('project_id')
        .inTable('projects');
      tbl
        .integer('resource_id')
        .usigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources');
    });
};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
