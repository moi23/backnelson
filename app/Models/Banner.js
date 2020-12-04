const Model = use("Model");

class Banner extends Model {
  static get hidden() {
    return ["created_at", "updated_at", "picture_id"];
  }

  picture() {
    return this.belongsTo("App/Models/Picture");
  }
}

module.exports = Banner;
