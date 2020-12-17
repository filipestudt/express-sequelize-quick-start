const Sequelize = require('sequelize');
const dbConfig = require('./config');
const fs = require('fs');
const path = require('path');

const connection = new Sequelize(dbConfig);

const modelsPath = path.join(__dirname, '../models');

var models = fs.readdirSync(modelsPath);
var modelsArr = [];

for (let model of models) {
    let modelInstance = require(modelsPath + '/' + model);
    modelInstance.init(connection);
    modelsArr.push(modelInstance);
}

for (let model of modelsArr) {
    model.associate(connection.models);
}

module.exports = connection;