const SubCategory = use("App/Models/SubCategory");

class SubCategoryController {
  async index() {
    return await SubCategory.all();
  }

  async show({ params, response }) {
    try {
      const { id } = params;

      return await SubCategory.findOrFail(id);
    } catch {
      return response
        .status(404)
        .send({ error: "sub-category does not exist" });
    }
  }

  async store({ request, response }) {
    try {
      const { description, category_id } = request.all();

      return await SubCategory.create({ description, category_id });
    } catch {
      return response.status(500).send({ error: "something goes wrong" });
    }
  }

  async update({ request, response, params }) {
    try {
      const { id } = params;
      const { description, category_id } = request.all();

      const sub_category = await SubCategory.findOrFail(id);

      sub_category.merge({ description, category_id });
      await sub_category.save();

      return sub_category;
    } catch {
      return response.status(500).send({ error: "something goes wrong" });
    }
  }

  async destroy({ params }) {
    try {
      const { id } = params;

      const sub_category = await SubCategory.findOrFail(id);

      return await sub_category.delete();
    } catch {
      return response.status(500).send({ error: "something goes wrong" });
    }
  }
}

module.exports = SubCategoryController;
