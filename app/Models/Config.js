
const Model = use("Model");

class Config extends Model {
  static get hidden() {
    return ["created_at", "updated_at"];
  }

  static get table() {
    return "configs";
  }
}

module.exports = Config;
