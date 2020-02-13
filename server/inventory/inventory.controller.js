const express = require('express');
const router = express.Router();
const inventoryService = require('./inventory.service');

// routes
router.get('/', getAll);
router.get('/:status', getByStatus);
router.post('/approve', approve);
router.post('/add', create);
// router.delete('/:id', _delete);
// router.get('/status', getCurrent);

module.exports = router;

function getAll(req, res, next) {
    inventoryService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getByStatus(req, res, next) {
    inventoryService.getByStatus(req.params.status)
        .then(data => data ? res.json(data) : res.sendStatus(404))
        .catch(err => next(err));
}

function create(req, res, next) {
    inventoryService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
function approve(req, res, next) {
    inventoryService.approve()
        .then(() => res.json({}))
        .catch(err => next(err));
}

// function getCurrent(req, res, next) {
//     inventoryService.getById(req.user.sub)
//         .then(user => user ? res.json(user) : res.sendStatus(404))
//         .catch(err => next(err));
// }

// function _delete(req, res, next) {
//     inventoryService.delete(req.params.id)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }