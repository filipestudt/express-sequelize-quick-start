const db = require('../src/database');
const path = require('path');

const expressRoutesCreator = require('express-routes-creator');

expressRoutesCreator.generateFromModel({
    routesOutput: 'src/routes',
    controllersOutput: 'src/controllers',
    models: db.models,
    consign: true,
    //replace: true
})