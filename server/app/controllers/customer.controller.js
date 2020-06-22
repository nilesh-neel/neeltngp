const db = require("../models");



exports.allAccess = (req, res) => {
    db.sequelize.query('CALL Usp_GetCustomers();').then(function(response) {
        res.json(response);
    }).error(function(err) {
        res.json(err);
    });
    // res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};