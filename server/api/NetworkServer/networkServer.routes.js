const { authJwt } = require("../middlewares");
const NetworkServerController = require("./networkServer.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  const networkServerController = new NetworkServerController();

  app.get("/api/v1_1/networkServer/:id", networkServerController.findByPk);
  app.get("/api/v1_1/networkServer", networkServerController.getAllData);
  app.post("/api/v1_1/networkServer", networkServerController.create);
  app.put("/api/v1_1/networkServer/:id",[authJwt.verifyToken], networkServerController.update);
  app.delete("/api/v1_1/networkServer/:id",[authJwt.verifyToken], networkServerController.destroy);
  app.get("/api/v1_1/networkServer/all/:id", networkServerController.getAllDataFromSpecific);

};
