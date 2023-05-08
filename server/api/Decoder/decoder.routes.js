const { authJwt } = require("../middlewares");
const DecoderController = require("./decoder.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  const decoderController = new DecoderController();

  app.get("/api/v1_1/decoder/:id", decoderController.findByPk);
  app.get("/api/v1_1/decoder", decoderController.getAllData);
  app.post("/api/v1_1/decoder", decoderController.create);
  app.put("/api/v1_1/decoder/:id",[authJwt.verifyToken], decoderController.update);
  app.delete("/api/v1_1/decoder/:id",[authJwt.verifyToken], decoderController.destroy);
  app.get("/api/v1_1/decoder/all/:id", decoderController.getAllDataFromSpecific);

};
