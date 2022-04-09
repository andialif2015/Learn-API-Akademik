const express = require('express');
const router = express.Router();
const { createMatkul, getAllMatkul, getMatkul, updateMatkul, deleteMatkul } = require('../controllers/matakuliah');

//CRUD
router.post('/', createMatkul);
router.get('/',getAllMatkul);
router.get('/:id', getMatkul);
router.put('/:id', updateMatkul);
router.delete('/:id', deleteMatkul);


module.exports = router;