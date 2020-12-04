const Schema = use("Schema");

class CreateBannersSchema extends Schema {
  up() {
    this.create("banners", table => {
      table
        .integer("order")
        .unsigned()
        .default(1);

      table
        .integer("picture_id")
        .unsigned()
        .references("id")
				.inTable("pictures");

			table
				.string("link")

      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop("banners");
  }
}

module.exports = CreateBannersSchema;
