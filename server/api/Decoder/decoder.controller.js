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
      name: req.body.name,
      description: req.body.description,
      type: req.body.type
    };

    console.log(dataRequest)
    return dataRequest
  }
}

module.exports = DecoderController;