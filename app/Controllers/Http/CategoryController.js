const Category = use("App/Models/Category");

class CategoryController {
  async index({ request }) {
    const { all } = request.all();

    if (all) {
      return await Category.query()
        .with("sub_categories.products.thumbnail")
        .fetch();
    }

    return await Category.query()
      .with("sub_categories")
      .fetch();
  }

  async show({ params, response }) {
    const { id } = params;

    const category = await Category.query()
      .where("id", id)
      .with("sub_categories")
      .first();

    if (!category) {
      return response.status(404).send({ error: "category does not exist" });
    }

    return category;
  }

  async store({ request, response }) {
    try {
      const { description } = request.all();

      return await Category.create({ description });
    } catch {
      return response.status(500).send({ error: "something goes wrong" });
    }
  }

  async update({ request, response, params }) {
    try {
      const { id } = params;
      const { description } = request.all();

      const category = await Category.findOrFail(id);

      category.merge({ description });
      await category.save();

      return category;
    } catch {
      return response.status(500).send({ error: "something goes wrong" });
    }
  }

  async destroy({ params }) {
    try {
      const { id } = params;

      const category = await Category.findOrFail(id);

      return await category.delete();
    } catch {
      return response.status(500).send({ error: "something goes wrong" });
    }
  }
}

module.exports = CategoryController;
