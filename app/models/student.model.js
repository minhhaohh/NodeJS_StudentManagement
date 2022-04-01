const { DataTypes } = require("sequelize");

const createStudentModel = (sequelize) => {
    return sequelize.define(
        "Student",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            sex: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        { tableName: "students", timestamps: true }
    );
};

module.exports = {
    createStudentModel,
};
