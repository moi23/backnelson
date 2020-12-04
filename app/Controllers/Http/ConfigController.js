const Config = use("App/Models/Config")
const Banner = use("App/Models/Banner")
const Category = use("App/Models/Category")

class ConfigController {

	async index() {
		return await Config.pickInverse(1);
	}

	async store({ request, response }) {
		const { banners_bg } = request.all();

		return await Config.create({ banners_bg })
	}

	async bootstrap({ request, response }) {
		const config = await Config.pickInverse(1);

		console.log(config)

		//const banners_bg = config && config[0] && config[0].banners_bg || "";
		const banners = await Banner.query()
      .with("picture")
      .fetch();
		
		const categories = await Category.query()
        .with("sub_categories.products.thumbnail")
        .fetch();

		return {
			banners,
			banners_bg: config,
			categories
		}
	}
}

module.exports = ConfigController
