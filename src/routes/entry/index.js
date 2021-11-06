const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/', controller.get); // Returns all entrys
router.post('/', controller.create); // Crates a new entry
router.patch('/:uuid', controller.update); // Updates an existing entry
router.delete('/:uuid', controller.del); //Deletes the entry

module.exports = {
    router,
};
