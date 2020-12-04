const User = use("App/Models/User");
// const Category = use("App/Models/Category");
// const SubCategory = use("App/Models/SubCategory");
// const Picture = use("App/Models/Picture");
// const Product = use("App/Models/Product");

class Dev {
  async run() {
    await User.create({
      email: "a@a.com",
      password: "1",
      username: "adminpika"
    });

    // const { id: id_sub_category } = await SubCategory.create({
    //   description: "Duas por 20"
    // });

    // const { id: id_category } = await Category.create({
    //   sub_category_id: id_sub_category,
    //   description: "Pizzas"
    // });

    // const { id: id_picture } = await Picture.create({
    //   url:
    //     "https://media-cdn.tripadvisor.com/media/photo-s/14/7d/2a/cf/img-20180906-181850-01.jpg",
    //   description: "Thumbnail de uma Pizza"
    // });

    // await Product.create({
    //   name: "Pizza de Calabresa",
    //   price: 15 * 100,
    //   thumbnail_id: id_picture,
    //   category_id: id_category
    // });
  }
}

module.exports = Dev;
