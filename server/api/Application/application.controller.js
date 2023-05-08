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
      name: req.body.name,
      description: req.body.description,
      serviceProfile: req.body.serviceProfile
    }

    console.log(dataRequest)
    return dataRequest
  }
}

module.exports = ApplicationController;