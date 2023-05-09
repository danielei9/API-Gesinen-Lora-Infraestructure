const { authJwt } = require("../middlewares");
const ServerController = require("./server.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  const serverController = new ServerController();

  app.get("/api/v1_1/server/:id", serverController.findByPk);
  app.get("/api/v1_1/server", serverController.getAllData);
  app.post("/api/v1_1/server", serverController.create);
  app.put("/api/v1_1/server/:id",[authJwt.verifyToken], serverController.update);
  app.delete("/api/v1_1/server/:id",[authJwt.verifyToken], serverController.destroy);
  app.get("/api/v1_1/server/all/:id", serverController.getAllDataFromSpecific);

};
