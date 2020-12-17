const express = require('express');
const app = express();
app.use(express.json({ limit: '5MB' }));

require('./src/database');

app.listen(3000);

module.exports = app;