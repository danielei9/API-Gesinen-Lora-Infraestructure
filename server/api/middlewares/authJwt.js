const jwt = require("jsonwebtoken");
const config = require("../../config/auth.config.js");
const db = require("../../models");
const User = db.user;

var verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    console.log("DECODED UID:  " + decoded.UID)
    console.log("DECODED AID:  " + decoded.AID)
    req.UID = decoded.UID; //nos asegura que sea esta la id 
    req.AID = decoded.AID; //nos asegura que sea esta la id 
    next();
  });
};

var isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(userRols => {
      for (let i = 0; i < userRols.length; i++) {
        if (userRols[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require Admin Role!"
      });
      return;
    });
  });
};

var isModerator = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(userRols => {
      for (let i = 0; i < userRols.length; i++) {
        if (userRols[i].name === "moderator") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "Require Moderator Role!"
      });
    });
  });
};

var isModeratorOrAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(userRols => {
      for (let i = 0; i < userRols.length; i++) {
        if (userRols[i].name === "moderator") {
          next();
          return;
        }
        if (userRols[i].name === "admin") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "Require Moderator or Admin Role!"
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isModerator: isModerator,
  isModeratorOrAdmin: isModeratorOrAdmin
};

module.exports = authJwt;
