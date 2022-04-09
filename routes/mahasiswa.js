const express = require('express');
const router = express.Router();
const { createMhs, getAllMhs, getMhs, updateMhs, deleteMhs } = require('../controllers/mahasiswa');

//CRUD
router.post('/', createMhs);
router.get('/',getAllMhs);
router.get('/:id', getMhs);
router.put('/:id', updateMhs);
router.delete('/:id', deleteMhs);


module.exports = router;