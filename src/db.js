const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
    host: "isi ip", // IP Address App Server
    user: "root",
    database: "kuliah",
    password: "", 
});

// Connect to the MySQL database
connection.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err.stack);
        return;
    }
    console.log("Connected to MySQL as id " + connection.threadId);
});

module.exports = connection;
