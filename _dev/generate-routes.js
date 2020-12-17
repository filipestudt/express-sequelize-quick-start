const db = require('../src/database');

const expressRoutesCreator = require('express-routes-creator');

expressRoutesCreator({
    routesPath: __dirname + '/routes',
    routesOutputPath: './src/routes',
    controllersOutputPath: './src/controllers',
    models: db.models,
    owner: true
})