const { authJwt } = require("../middlewares");
const GatewayController = require("./gateway.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  const gatewayController = new GatewayController();

  app.get("/api/v1_1/gateway/:id", gatewayController.findByPk);
  app.get("/api/v1_1/gateway", gatewayController.getAllData);// verify is admin
  app.post("/api/v1_1/gateway", gatewayController.create);
  app.put("/api/v1_1/gateway/:id",[authJwt.verifyToken], gatewayController.update);
  app.delete("/api/v1_1/gateway/:id",[authJwt.verifyToken], gatewayController.destroy);
  app.get("/api/v1_1/gateway/all/:id", gatewayController.getAllDataFromSpecific);
  
};
