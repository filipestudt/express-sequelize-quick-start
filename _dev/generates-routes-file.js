const db = require('../src/database');

const expressRoutesCreator = require('express-routes-creator');

expressRoutesCreator.generateFile({
    routes: [],
    routesOutput: 'src/routes',
    controllersOutput: 'src/controllers',
    models: db.models,
    consign: true,
    //replace: true
})