'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    static associate(models) {
      // Application.belongsToMany(models.NetworkServer, {
      //   through: "ApplicationNetworkServer",
      //   foreignKey: "applicationId",
      //   otherKey: "networkServerId"
      // });
      // Application.belongsTo(models.ServiceProfile, {
      //   foreignKey: "serviceProfileId"
      // });
    }
  }

  Application.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    serviceProfile: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    freezeTableName: true,
  });

  return Application;
};
