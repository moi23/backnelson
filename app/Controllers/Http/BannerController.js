const Banner = use("App/Models/Banner");
const Config = use("App/Models/Config");

class BannerController {
	async index() {
		const banners = await Banner.query()
      .with("picture")
      .fetch();

		return {
			banners,
		}
  }

  async store({ request, response }) {
    try {
      const { order, picture_id, link } = request.all();

      return await Banner.create({ order, picture_id, link });
    } catch {
      return response.status(500).send({ error: "something goes wrong" });
    }
  }

  async update({ request, response, params }) {
    try {
      const { id } = params;
      const { order } = request.all();

      const banner = await Banner.findOrFail(id);

      banner.merge({ order });
      await banner.save();

      return banner;
    } catch {
      return response.status(500).send({ error: "something goes wrong" });
    }
  }

  async destroy({ params }) {
    try {
      const { id } = params;

      const banner = await Banner.findOrFail(id);

      return await banner.delete();
    } catch {
      return response.status(500).send({ error: "something goes wrong" });
    }
  }
}

module.exports = BannerController;
