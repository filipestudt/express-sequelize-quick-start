const db = require('../src/database');

const expressRoutesCreator = require('express-routes-creator');

expressRoutesCreator.generateFileFromModel({
    models: db.models,
    fileOutput: 'routes',
    replace: true
})