const express = require('express');
const router = express.Router();
const mhs = require('./mahasiswa');
const dosen = require('./dosen');
const matakuliah = require('./matakuliah');
const krs = require('./krs');

//mhs
router.use('/mahasiswa', mhs);
router.use('/dosen', dosen);
router.use('/matakuliah', matakuliah);
router.use('/krs', krs);


module.exports = router;