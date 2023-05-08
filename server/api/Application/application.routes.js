const { authJwt } = require("../middlewares");
const ApplicationController = require("./application.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  const applicationController = new ApplicationController();

  app.get("/api/v1_1/application/:id", applicationController.findByPk);
  app.get("/api/v1_1/application", applicationController.getAllData);
  app.post("/api/v1_1/application", applicationController.create);
  app.put("/api/v1_1/application/:id",[authJwt.verifyToken], applicationController.update);
  app.delete("/api/v1_1/application/:id",[authJwt.verifyToken], applicationController.destroy);
  app.get("/api/v1_1/application/all/:id", applicationController.getAllDataFromSpecific);

};
