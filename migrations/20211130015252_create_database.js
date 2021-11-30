
exports.up = function (knex) {
    return knex.schema.createTable('recipes', (table) => {
        table.increments('recipe_id').primary();
        table.text('recipe_name').notNullable();
        table.text('recipe_created_at').notNullable();
    })
        .createTable('ingredients', (table) => {
            table.increments('ingredient_id').primary();
            table.text('ingredient_name').notNullable();
        })
        .createTable('steps', table => {
            table.increments('step_id').primary();
            table.text('step_number').notNullable();
            table.text('step_instructions').notNullable();
            table.text('quantity');
            table.integer('ingredient_id').references('ingredient_id').inTable('ingredients');
            table.integer('recipe_id').references('recipes.recipe_id').notNullable();
        })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
