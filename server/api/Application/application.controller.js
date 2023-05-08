//********************************************* */
//******************** CONTROLLER ******************* */
//********************************************* */
const db = require("../../models");
const Application = db.application;
const Controller = require("../Controller.js");
const ApplicationLogic = require("./application.logic.js");

class ApplicationController extends Controller {
  constructor() {
    super(Application);
    super.model = Application
    super.logic = new ApplicationLogic(Application)
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

module.exports = ApplicationController;