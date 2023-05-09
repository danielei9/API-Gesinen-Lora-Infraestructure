//********************************************* */
//******************** CONTROLLER ******************* */
//********************************************* */
const db = require("../../models");
const Logic = require("../Logic.js");
const Server = db.server;

class ServerLogic extends Logic {
  constructor() {
    super(Server);
    super.model = Server
  }

  getAllData = async () => {
    try {
      return new Promise((resolve, reject) => {
        this.model.findAll({
          include: [
            // { model: db.council },
            // { model: db.userRol },
            // { model: db.business }
          ]
        }).then((servers) => resolve(servers))
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
            include: [{
              // model: db.council,
              // required: true,
            }]
          }).then((server) => resolve(server))
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
module.exports = ServerLogic;
