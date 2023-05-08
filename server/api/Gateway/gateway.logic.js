//********************************************* */
//******************** CONTROLLER ******************* */
//********************************************* */
const db = require("../../models");
const Logic = require("../Logic.js");
const Gateway = db.gateway;

class GatewayLogic extends Logic {
  constructor() {
    super(Gateway);
    super.model = Gateway
  }

  getAllData = async () => {
    try {
      return new Promise((resolve, reject) => {
        this.model.findAll().then((gateways) => resolve(gateways))
          .catch((error) => { reject(error) })
      })
    }
    catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }

  getAllDataFromSpecific = async (id) => {
    try {
      return new Promise((resolve, reject) => {
        this.model.findByPk(id).then(async (r) => {
          console.log(r)
          await this.model.findAll({
            where: {
              id: id
            },
          }).then((gateway) => resolve(gateway))
            .catch((error) => { reject(error) })
        })
          .catch((error) => { reject(error) })
      })
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
}
module.exports = GatewayLogic;
