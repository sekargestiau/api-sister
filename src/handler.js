const connection = require('./db');  // Import koneksi dari db.js

// Handler untuk mendapatkan semua data dari tabel mahasiswa
const getAllMahasiswa = (req, res) => {
    const query = 'SELECT * FROM mahasiswa';
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Handler untuk mendapatkan semua data dari tabel dosen
const getAllDosen = (req, res) => {
    const query = 'SELECT * FROM dosen';
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Handler untuk mendapatkan semua data dari tabel mata_kuliah
const getAllMataKuliah = (req, res) => {
    const query = 'SELECT * FROM mata_kuliah';
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Handler untuk mendapatkan semua data dari tabel perkuliahan
const getAllPerkuliahan = (req, res) => {
    const query = 'SELECT * FROM perkuliahan';
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

module.exports = {
    getAllMahasiswa,
    getAllDosen,
    getAllMataKuliah,
    getAllPerkuliahan
};
