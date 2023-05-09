'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sensor extends Model {
    static associate(models) {
      // Sensor belongs to a Server
    //   Sensor.belongsTo(models.Server, {
    //     foreignKey: "serverId"
    //   });
    //   // Sensor belongs to a SensorType
    //   Sensor.belongsTo(models.SensorType, {
    //     foreignKey: "sensorTypeId"
    //   });
    }
  }

  Sensor.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // TODO: Cambiar a relacion con tipo de sensores ... Habrá un modelo  Por ejemplo:
    // STA -- El cual tendrá salt, saltversion .. etc y todo lo relacionado con sta
    // en este modelo actual solo se refleja LORA y sensor generico. 
    sensorType: {
      type: DataTypes.ENUM('Temperature', 'Humidity', 'Pressure', 'Air Quality'),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    installationDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    devEUI: {
      type: DataTypes.STRING,
      allowNull: false
    },
    appEUI: {
      type: DataTypes.STRING,
      allowNull: false
    },
    appKey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    encryptionKey: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Sensor'
  });

  return Sensor;
};