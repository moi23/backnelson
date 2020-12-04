const Model = use("Model");

class Category extends Model {
  static get hidden() {
    return ["created_at", "updated_at"];
  }

  static get table() {
    return "categories";
  }

  sub_categories() {
    return this.hasMany("App/Models/SubCategory");
  }
}

module.exports = Category;
