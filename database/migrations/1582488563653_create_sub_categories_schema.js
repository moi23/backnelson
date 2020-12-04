const Schema = use("Schema");

class CreateSubcategoriesSchema extends Schema {
  up() {
    this.create("sub_categories", table => {
      table.string("description", 80);
      table
        .integer("category_id")
        .unsigned()
        .references("id")
        .inTable("categories");

      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop("sub_categories");
  }
}

module.exports = CreateSubcategoriesSchema;
