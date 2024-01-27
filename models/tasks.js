const { Sequelize } = require('sequelize');

const sequelize = require('../utils/database');

const Task = sequelize.define('task', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: Sequelize.STRING,
    status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Task;