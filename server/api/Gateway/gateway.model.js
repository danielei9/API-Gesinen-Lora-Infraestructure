'use strict';
//sequelize model:generate --name role.model --attributes name:string
const bcrypt = require("bcryptjs");

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Gateway extends Model {
    static associate(models) {
      // models.user.belongsToMany(models.council, {
      //   through: "user_council",
      //   foreignKey: "userId",
      //   otherKey: "councilId"
      // });

      // GROUPS
      // PROJECTS
      // COUNCIL
      // BUSINESS
      
    }

    // static async createUserWithUserRol(user) {
    //   // Crea el nuevo usuario
    // //   const newUser = await this.create({
    // //     username: user.username,
    // //     name: user.name,
    // //     surname: user.surname,
    // //     email: user.email,
    // //     pswd: user.pswd,
    // //     phone: user.phone,
    // //     postalCode: user.postalCode,
    // //     street: user.street,
    // //     locality: user.locality,
    // //     country: user.country,
    // //   });
    // //   // // Obtiene el UserRol
    // //   const userRol = await UserRol.findOne({
    // //     where: {
    // //       name: user.userRolName
    // //     }
    // //   });

    // //   try {
    // //     await newUser.addUserRols(userRol.id);
    // //     await newUser.addCouncils(user.councils);
    // //     await newUser.addBusinesses(user.businesses);
    // //   } catch (error) {
    // //     console.log(error)
    // //     throw error;
    // //   }
    // //   return newUser;
    // }
  }

Gateway.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mac: {
      type: DataTypes.STRING,
      allowNull: false
    },
    embeddedNetworkServer: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    latitude: {
      type: DataTypes.DECIMAL(9, 6),
      allowNull: true
    },
    longitude: {
      type: DataTypes.DECIMAL(9, 6),
      allowNull: true
    },
    town: {
      type: DataTypes.STRING,
      allowNull: true
    },
    circleRadius: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    freezeTableName: true,
  });
  

  return Gateway;
};
