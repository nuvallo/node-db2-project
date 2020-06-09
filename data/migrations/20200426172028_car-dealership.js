exports.up = async function (knex) {
  await knex.schema.createTable("vehicles", (table) => {
    table.increments();

    table.string("VIN").notNullable().unique().index();

    table.string("make").notNullable();

    table.string("model").notNullable();

    table.string("mileage").notNullable();

    table.string("transmission");

    table.boolean("title");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("vehicles");
};
