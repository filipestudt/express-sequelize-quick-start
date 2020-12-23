require('dotenv').config();
const SequelizeAuto = require('./sequelize-auto');

var config = {
    camelCase: false,
    typescript: false,
    dialect: 'postgres',
    schema: 'public',
    host: process.env.DB_HOST,
    port: '5432',
    directory: 'src/models',
    additional: {
        schema: 'public'
    }
}

const auto = new SequelizeAuto(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, config);

auto.run(function (err) {
    if (err) throw err;
});
