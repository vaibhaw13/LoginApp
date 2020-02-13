// import { Schema as _Schema, model } from 'mongoose';
// const Schema = _Schema;

// const schema = new Schema({
//     username: { type: String, unique: true, required: true },
//     hash: String,
//     password: { type: String, required: true },
//     email: { type: String, required: true }
// });

// schema.set('toJSON', { virtuals: true });

// export default model('Users', schema);

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: String,
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: String
});

module.exports = mongoose.model('User', UserSchema);