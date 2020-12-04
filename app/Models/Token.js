const Model = use("Model");

class Token extends Model {
  static get hidden() {
    return ["created_at", "updated_at"];
  }
}

module.exports = Token;
