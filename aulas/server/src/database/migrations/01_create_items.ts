import Knex from 'knex';

    //Criar tabelas
export async function up(knex: Knex){
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();

        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}
    //Voltar atrás (deletar tabelas)
export async function down(knex: Knex){
    return knex.schema.dropTable('items');
}