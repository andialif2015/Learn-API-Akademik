const express = require('express');
const router = express.Router();
const { createKrs, getAllKrs, getKrs, updateKrs, deleteKrs } = require('../controllers/krs');

//CRUD
router.post('/', createKrs);
router.get('/',getAllKrs);
router.get('/:id', getKrs);
router.put('/:id', updateKrs);
router.delete('/:id', deleteKrs);


module.exports = router;