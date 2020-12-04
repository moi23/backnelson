const Route = use("Route");

Route.get("/ping", () => "ok");

Route.group(() => {
  Route.get("auth", "SessionController.show");

  Route.resource("subcategories", "SubCategoryController").except([
    "index",
    "show"
  ]);
  Route.resource("categories", "CategoryController").except(["index", "show"]);
  Route.resource("subcategories", "SubCategoryController").except([
    "index",
    "show"
  ]);
  Route.resource("pictures", "PictureController").except(["index", "show"]);
  Route.resource("products", "ProductController").except(["index", "show"]);
	Route.resource("banners", "BannerController").except(["index", "show"]);
	Route.post("config", "ConfigController.store")
})
  .prefix("api")
  .middleware("auth");

// Public routes
Route.group(() => {
  Route.post("auth", "SessionController.store");

  Route.resource("categories", "CategoryController").only(["index", "show"]);
  Route.resource("subcategories", "SubCategoryController").only([
    "index",
    "show"
  ]);
  Route.resource("pictures", "PictureController").only(["index", "show"]);
  Route.resource("banners", "BannerController").only(["index", "show"]);
	Route.resource("products", "ProductController").only(["index", "show"]);
	Route.get("config", "ConfigController.index")
	Route.get("config/bootstrap", 'ConfigController.bootstrap')
}).prefix("api");
