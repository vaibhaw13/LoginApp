const expressJwt = require('express-jwt');
// const config = require('../_helpers/config');
const config = {
    connectionString: "mongodb://localhost:27017/local",
    secret: "SECRET_STRING"
};
// {
//     "connectionString": "mongodb:/localhost:27017/local",
//     "secret": "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
// }
const userService = require('../users/user.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    // console.log(req, payload, done)
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};