// import { Schema as _Schema, model } from 'mongoose';
// const Schema = _Schema;

// const schema = new Schema({
//     id: { type: Number, unique: true},
//     name: String,
//     vendor: String,
//     BatchNum: Number,
//     BtachDate: Date,
//     MRP: Number,
//     Quantity: Number,
//     Status: String
// });

// schema.set('toJSON', { virtuals: true });

// export default model('Inventory', schema);

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const InventorySchema = new Schema({
    productid: Number,
    productname: String,
    vendor: String,
    batchnum: Number,
    btachdate: Date,
    mrp: Number,
    quantity: Number,
    status: String
});

module.exports = mongoose.model('Inventory', InventorySchema);