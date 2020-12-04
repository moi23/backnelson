const Model = use("Model");

class SubCategory extends Model {
  static get hidden() {
    return ["created_at", "updated_at", "category_id"];
  }

  static get table() {
    return "sub_categories";
  }

  products() {
    return this.hasMany("App/Models/Product");
  }
}

module.exports = SubCategory;
