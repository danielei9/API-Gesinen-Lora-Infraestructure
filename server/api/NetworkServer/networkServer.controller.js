//********************************************* */
//******************** CONTROLLER ******************* */
//********************************************* */
const db = require("../../models");
const NetworkServer = db.networkServer;
const Controller = require("../Controller.js");
const NetworkServerLogic = require("./networkServer.logic.js");

class NetworkServerController extends Controller {
  constructor() {
    super(NetworkServer);
    super.model = NetworkServer
    super.logic = new NetworkServerLogic(NetworkServer)
  }


  getDataFromRequest(req) {
    const dataRequest = {
      name: req.body.name,
      description: req.body.description,
      type: req.body.type,
      networkType: req.body.networkType,
      url: req.body.url,
      status: req.body.status,
    };

    console.log(dataRequest)
    return dataRequest
  }
}

module.exports = NetworkServerController;