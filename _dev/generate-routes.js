const db = require('../src/database');
const path = require('path');

const expressRoutesCreator = require('express-routes-creator');

// expressRoutesCreator.generateFileFromModel({
//     models: db.models,
//     output: 'routes'
// })

expressRoutesCreator.generateFromFile({
    filesPath: path.join(__dirname, '../routes'),
    routesOutput: 'src/routes',
    controllersOutput: 'src/controllers',
    models: db.models,
    consign: true,
    //replace: true
})