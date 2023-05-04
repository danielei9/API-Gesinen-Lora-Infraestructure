//********************************************* */
//******************** CONTROLLER ******************* */
//********************************************* */
const db = require("../../models");
const Controller = require("../Controller.js");
const UserLogic = require("./user.logic.js");
const User = db.user;

class UserController extends Controller {
  constructor() {
    super(User);
    super.model = User
    super.logic = new UserLogic(User)
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

module.exports = UserController;