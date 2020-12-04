const Model = use("Model");

class Picture extends Model {
  static get hidden() {
    return ["created_at", "updated_at"];
  }

  static get table() {
    return "pictures";
  }
}

module.exports = Picture;
