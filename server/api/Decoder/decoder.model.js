'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Decoder extends Model {
    static associate(models) {
      // Decoder.belongsToMany(models.Sensor, {
      //   through: "DecoderSensor",
      //   foreignKey: "decoderId",
      //   otherKey: "sensorId"
      // });
      // Decoder.belongsTo(models.Network, {
      //   foreignKey: "networkId"
      // });
      // Decoder.belongsTo(models.Server, {
      //   foreignKey: "serverId"
      // });
      // Decoder.hasMany(models.SensorType, {
      //   foreignKey: "decoderId"
      // });
    }
  }

  Decoder.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    decoderType: {
      type: DataTypes.ENUM('Centralizado', 'Embebido'),
      allowNull: false
    }
  }, {
    sequelize,
    freezeTableName: true,
  });

  return Decoder;
};