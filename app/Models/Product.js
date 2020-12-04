const Model = use("Model");

class Product extends Model {
  static get hidden() {
    return ["created_at", "updated_at", "thumbnail_id"];
  }

  static get table() {
    return "products";
  }

  category() {
    return this.belongsTo("App/Models/Category");
  }

  thumbnail() {
    return this.belongsTo("App/Models/Picture", "thumbnail_id", "id");
  }

  pictures() {
    return this.belongsToMany("App/Models/Picture").pivotTable(
      "product_pictures"
    );
  }
}

module.exports = Product;
