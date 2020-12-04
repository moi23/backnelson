const Product = use("App/Models/Product");

class ProductController {
  async index() {
    return await Product.query()
      .with("thumbnail")
      .fetch();
  }

  async show({ params, response }) {
    const { id } = params;

    const product = await Product.query()
      .where("id", id)
      .with("thumbnail")
      .first();

    if (!product) {
      return response.status(404).send({ error: "product does not exist" });
    }

    return product;
  }

  async store({ request, response }) {
    try {
      const {
        name,
        price,
        category_id,
        sub_category_id,
        thumbnail_id
      } = request.all();

      return await Product.create({
        name,
        price,
        category_id,
        sub_category_id,
        thumbnail_id
      });
    } catch {
      return response.status(500).send({ error: "something goes wrong" });
    }
  }

  async update({ request, response, params }) {
    try {
      const { id } = params;
      const {
        name,
        price,
        category_id,
        sub_category_id,
        thumbnail_id
      } = request.all();

      const product = await Product.findOrFail(id);

      product.merge({
        name,
        price,
        category_id,
        sub_category_id,
        thumbnail_id
      });

      await product.save();

      return product;
    } catch {
      return response.status(500).send({ error: "something goes wrong" });
    }
  }

  async destroy({ params, response }) {
    try {
      const { id } = params;

      const product = await Product.findOrFail(id);

      return await product.delete();
    } catch {
      return response.status(500).send({ error: "something goes wrong" });
    }
  }
}

module.exports = ProductController;
