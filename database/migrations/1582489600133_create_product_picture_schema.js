const Schema = use("Schema");

class CreateProductPictureSchema extends Schema {
  up() {
    this.create("product_pictures", table => {
      table
        .integer("product_id")
        .unsigned()
        .references("id")
        .inTable("products");

      table
        .integer("picture_id")
        .unsigned()
        .references("id")
        .inTable("pictures");

      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop("product_pictures");
  }
}

module.exports = CreateProductPictureSchema;
