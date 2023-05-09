//********************************************* */
//******************** CONTROLLER ******************* */
//********************************************* */
const db = require("../../models");
const Server = db.server;
const Controller = require("../Controller.js");
const ServerLogic = require("./server.logic.js");

class ServerController extends Controller {
  constructor() {
    super(Server);
    super.model = Server
    super.logic = new ServerLogic(Server)
  }

  getDataFromRequest(req) {
    const dataRequest = {
      name: req.body.name,
      serverType: req.body.serverType,
      serverUrl: req.body.serverUrl,
      provider: req.body.provider,
      token: req.body.token
    };
    
    console.log(dataRequest)
    return dataRequest
  }
}

module.exports = ServerController;