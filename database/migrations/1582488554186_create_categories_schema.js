const Schema = use("Schema");

class CreateCategoriesSchema extends Schema {
  up() {
    this.create("categories", table => {
      table.string("description", 80);
      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.dropIfExists("categories");
  }
}

module.exports = CreateCategoriesSchema;
