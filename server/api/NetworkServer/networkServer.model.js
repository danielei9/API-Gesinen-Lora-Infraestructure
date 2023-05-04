'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class NetworkServer extends Model {
    static associate(models) {
    //   NetworkServer.belongsToMany(models.Application, {
    //     through: "ApplicationNetworkServer",
    //     foreignKey: "networkServerId",
    //     otherKey: "applicationId"
    //   });
    //   NetworkServer.belongsToMany(models.DeviceProfile, {
    //     through: "DeviceProfileNetworkServer",
    //     foreignKey: "networkServerId",
    //     otherKey: "deviceProfileId"
    //   });
    }
  }

  NetworkServer.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.ENUM('chirpstack', 'ttn'),
      allowNull: false
    },
    networkType: {
      type: DataTypes.ENUM('embedded', 'centralized'),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
  }, {
    sequelize,
    freezeTableName: true,
  });

  return NetworkServer;
};
