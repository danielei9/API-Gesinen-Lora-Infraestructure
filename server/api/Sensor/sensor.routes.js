const { authJwt } = require("../middlewares");
const SensorController = require("./sensor.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  const sensorController = new SensorController();

  app.get("/api/v1_1/sensor/:id", sensorController.findByPk);
  app.get("/api/v1_1/sensor", sensorController.getAllData);
  app.post("/api/v1_1/sensor", sensorController.create);
  app.put("/api/v1_1/sensor/:id",[authJwt.verifyToken], sensorController.update);
  app.delete("/api/v1_1/sensor/:id",[authJwt.verifyToken], sensorController.destroy);
  app.get("/api/v1_1/sensor/all/:id", sensorController.getAllDataFromSpecific);

};
