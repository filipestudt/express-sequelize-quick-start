let SequelizeAuto = require('./sequelize-auto');

var config = {
    camelCase: false,
    typescript: false,
    dialect: 'postgres',
    schema: 'public',
    host: 'localhost',
    port: '5432',
    additional: {
        schema: 'public'
    }
}

let auto = new SequelizeAuto('database', 'user', 'password', config);

auto.run(function (err) {
    if (err) throw err;
});
