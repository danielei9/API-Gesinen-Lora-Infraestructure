//********************************************* */
//******************** CONTROLLER ******************* */
//********************************************* */
const db = require("../../models");
const Logic = require("../Logic.js");
const Application = db.application;

class ApplicationLogic extends Logic {
  constructor() {
    super(Application);
    super.model = Application
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
        }).then((applications) => resolve(applications))
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
          }).then((application) => resolve(application))
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
module.exports = ApplicationLogic;
