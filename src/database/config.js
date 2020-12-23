require('dotenv').config();

module.exports = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    define: {
        hooks: {
            /**
             * Disable update to a field of the model when defined update = false
             */
            beforeUpdate: async function (model, options) {
                try {
                    for (let [field, attributes] of Object.entries(options.model.tableAttributes)) {
                        if (attributes.update === false) {
                            const pos = options.fields.indexOf(`${field}`);
                            options.fields.splice(pos, 1);
                            model._changed.delete(`${field}`);
                            const prev = { ...model._previousDataValues };
                            model.dataValues[`${field}`] = prev[`${field}`];
                        }
                    }
                }
                catch (e) { }
            }
        },
        timestamps: true
    }
}