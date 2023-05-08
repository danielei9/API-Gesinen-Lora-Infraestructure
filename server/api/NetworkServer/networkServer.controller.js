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
      username: req.body.username,
      name: req.body.name,
      surname: req.body.surname,
      phone: req.body.phone,
      email: req.body.email,
      pswd: req.body.pswd,
      postalCode: req.body.postalCode,
      street: req.body.street,
      locality: req.body.locality,
      country: req.body.country,
      CouncilId: req.body.councilId,
      BusinessId: req.body.businessId,
    }

    console.log(dataRequest)
    return dataRequest
  }
}

module.exports = NetworkServerController;