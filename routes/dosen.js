const express = require('express');
const router = express.Router();
const { createDosen, getAllDosen, getDosen, updateDosen, deleteDosen } = require('../controllers/dosen');

//CRUD
router.post('/', createDosen);
router.get('/',getAllDosen);
router.get('/:id', getDosen);
router.put('/:id', updateDosen);
router.delete('/:id', deleteDosen);


module.exports = router;