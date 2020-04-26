exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    table.increments();

    table.string("VIN").notNullable().unique().index();

    table.string("make").notNullable();

    table.string("model").notNullable();

    table.string("mileage").notNullable();

    table.string("transmission");

    table.boolean("title");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
