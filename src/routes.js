const express = require('express');
const router = express.Router();
const { getAllMahasiswa, getAllDosen, getAllMataKuliah, getAllPerkuliahan } = require('./handler');  // Import semua handler

// Define API routes
router.get('/mahasiswa', getAllMahasiswa);
router.get('/dosen', getAllDosen);
router.get('/mata_kuliah', getAllMataKuliah);
router.get('/perkuliahan', getAllPerkuliahan);

module.exports = router;
