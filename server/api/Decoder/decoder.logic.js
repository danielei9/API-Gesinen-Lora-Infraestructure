//********************************************* */
//******************** CONTROLLER ******************* */
//********************************************* */
const db = require("../../models");
const Logic = require("../Logic.js");
const Decoder = db.decoder;

class DecoderLogic extends Logic {
  constructor() {
    super(Decoder);
    super.model = Decoder
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
        }).then((decoders) => resolve(decoders))
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
          }).then((decoder) => resolve(decoder))
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
module.exports = DecoderLogic;
