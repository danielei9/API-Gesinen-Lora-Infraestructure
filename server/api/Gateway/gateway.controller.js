//********************************************* */
//******************** CONTROLLER ******************* */
//********************************************* */
const db = require("../../models");
const Controller = require("../Controller.js");
const GatewayLogic = require("./gateway.logic.js");
const Gateway = db.gateway;

class UserController extends Controller {
  constructor() {
    super(Gateway);
    super.model = Gateway
    super.logic = new GatewayLogic(Gateway)
  }


  getDataFromRequest(req) {
    const dataRequest = {
      name: req.body.name,
      mac: req.body.mac,
      embeddedNetworkServer: req.body.embeddedNetworkServer,
      description: req.body.description,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      town: req.body.town,
      circleRadius: req.body.circleRadius,
      disabled: req.body.disabled,
      status: req.body.status,
    };
    
    console.log(dataRequest)
    return dataRequest
  }
}

module.exports = UserController;