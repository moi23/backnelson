const Schema = use("Schema");

class CreatePicturesSchema extends Schema {
  up() {
    this.create("pictures", table => {
      table.string("url").notNullable();
      table.string("name").notNullable();
      table.string("description").notNullable();

      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.dropIfExists("pictures");
  }
}

module.exports = CreatePicturesSchema;
