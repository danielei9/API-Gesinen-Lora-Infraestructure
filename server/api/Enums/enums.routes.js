const Controller = require("../Controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  const controller = new Controller();


  app.get("/api/v1_1/enums", controller.getEnums);
};
