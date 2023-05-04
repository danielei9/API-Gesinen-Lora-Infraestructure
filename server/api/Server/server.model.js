'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Server extends Model {
    static associate(models) {
      // Server has many Sensors
      // Server.hasMany(models.Sensor, {
      //   foreignKey: "serverId"
      // });
    }
  }

  Server.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    serverType: {
      type: DataTypes.ENUM('Sentilo', 'fiware', 'mqtt'),
      allowNull: false
    },
    serverUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    provider: {
      type: DataTypes.STRING,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Server'
  });

  return Server;
};