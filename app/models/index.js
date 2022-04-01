const { Sequelize, DataTypes } = require("sequelize");
const { HOST, USER, PASSWORD, DB, dialect } = require("../configs/db.config");
const { createStudentModel } = require("./student.model");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: dialect,
});

const Student = createStudentModel(sequelize);

module.exports = {
    sequelize,
    Student,
};
