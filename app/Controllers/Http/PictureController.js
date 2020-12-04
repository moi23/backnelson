const Picture = use("App/Models/Picture");
const Helpers = use("Helpers");
const fs = require("fs");
const path = require("path");

const { v4: uuid } = require("uuid");

const fsUnlink = Helpers.promisify(fs.unlink);

class PictureController {
  async index({ request }) {
    const { filter_by } = request.all();

    return await Picture.query()
      .where("description", filter_by)
      .fetch();
  }

  async store({ request }) {
    const { description } = request.all();

    const picture = request.file("picture", {
      types: ["image"],
      size: "2mb"
    });

    await picture.move(Helpers.publicPath("pictures"), {
      name: `${uuid()}.${picture.subtype}`,
      overwrite: true
    });

    if (!picture.moved()) {
      return picture.error();
    }

    return await Picture.create({
      url: `/pictures/${picture.fileName}`,
      description,
      name: picture.clientName
    });
  }

  async destroy({ params, response }) {
    try {
      const { id } = params;

      const picture = await Picture.find(id);

      if (picture) {
        const file_name = picture.url.split("/").pop();

        try {
          await fsUnlink(path.join(Helpers.publicPath("pictures"), file_name));
        } catch {}

        return await picture.delete();
      }

      return "true";
    } catch (e) {
      console.log(e);

      return response.status(500).send({ error: "something goes wrong" });
    }
  }
}

module.exports = PictureController;
