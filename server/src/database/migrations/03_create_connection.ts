import Knex from 'knex';

// Quais alterações quero realizar no banco de dados
export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('created_at')
            .defaultTo('now()')
            .notNullable();
    });
}

// Se der problema, desfaz
export async function down(knex: Knex) {
    return knex.schema.dropTable('connections');
}