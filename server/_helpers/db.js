// const config = require('./conf');
const config = {
    connectionString: "mongodb://localhost:27017/local",
    secret: "SECRET_STRING"
};
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(config.connectionString || process.env.MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true });

module.exports = {
    User: require('../users/user.model'),
    Inventory: require('../inventory/inventory.model'),
};