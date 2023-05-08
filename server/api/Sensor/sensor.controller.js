//********************************************* */
//******************** CONTROLLER ******************* */
//********************************************* */
const db = require("../../models");
const Sensor = db.sensor;
const Controller = require("../Controller.js");
const SensorLogic = require("./sensor.logic.js");

class SensorController extends Controller {
  constructor() {
    super(Sensor);
    super.model = Sensor
    super.logic = new SensorLogic(Sensor)
  }

  getDataFromRequest(req) {
    const dataRequest = {
      name: req.body.name,
      sensorType: req.body.sensorType,
      description: req.body.description,
      manufacturer: req.body.manufacturer,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      installationDate: req.body.installationDate,
      devEUI: req.body.devEUI,
      appEUI: req.body.appEUI,
      appKey: req.body.appKey,
      encryptionKey: req.body.encryptionKey,
    };

    console.log(dataRequest)
    return dataRequest
  }
}

module.exports = SensorController;