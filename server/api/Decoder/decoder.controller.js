//********************************************* */
//******************** CONTROLLER ******************* */
//********************************************* */
const db = require("../../models");
const Decoder = db.decoder;
const Controller = require("../Controller.js");
const DecoderLogic = require("./decoder.logic.js");

class DecoderController extends Controller {
  constructor() {
    super(Decoder);
    super.model = Decoder
    super.logic = new DecoderLogic(Decoder)
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

module.exports = DecoderController;