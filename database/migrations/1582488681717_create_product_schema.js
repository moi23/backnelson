const Schema = use("Schema");

class CreateProductSchema extends Schema {
  up() {
    this.create("products", table => {
      table.string("name").notNullable();
      table
        .integer("price")
        .unsigned()
        .notNullable();
      table
        .integer("thumbnail_id")
        .unsigned()
        .references("id")
        .inTable("pictures");

      table
        .integer("category_id")
        .unsigned()
        .references("id")
        .inTable("categories");

      table
        .integer("sub_category_id")
        .unsigned()
        .references("id")
        .inTable("sub_categories");

      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop("products");
  }
}

module.exports = CreateProductSchema;
