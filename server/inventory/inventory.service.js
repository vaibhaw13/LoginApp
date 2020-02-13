// const config = require('../config.json');
const config = {
    connectionString: "mongodb://localhost:27017/local",
    secret: "SECRET_STRING"
};
const db = require('../_helpers/db');
const Inventory = db.Inventory;

module.exports = {
    getAll,
    getByStatus,
    create,
    approve,
    // delete: _delete
};


async function getAll() {
    return await Inventory.find().select('-_id');
}

async function getByStatus(status) {
    console.log(status, 'sd')
    return await Inventory.find({status : status}).select('-_id');
}

async function create(param) {
    const inventory = new Inventory(param);

    // save inventory
    await inventory.save();
}

async function approve() {
    const inventory = await Inventory.find({status : 'Pending'});

    // validate
    if (!inventory) throw 'Pending Inventory request not found';
    // if (inventory.status !== 'Pending' && await Inventory.findOne({ username: userParam.username })) {
    //     throw 'Username "' + userParam.username + '" is already taken';
    // }

    console.log(inventory)
    // copy userParam properties to inventory
    // inventory.forEach()
    // Object.assign(inventory, param);
    await inventory.save();
}

async function _delete(productid) {
    await Inventory.remove({productid : productid})
}