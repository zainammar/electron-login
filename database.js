// database.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Database path
const dbPath = path.join(__dirname, 'users.db');

// Connect database
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Database connection error:", err.message);
    } else {
        console.log("Connected to SQLite database.");
    }
});

db.serialize(() => {

    // USERS TABLE (LOGIN)
    db.run(`
        CREATE TABLE IF NOT EXISTS users(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            cell TEXT,
            department TEXT,
            designation TEXT,
            username TEXT UNIQUE,
            password TEXT
        )
    `);

    // STAFF TABLE (DATA ENTRY)
    db.run(`
        CREATE TABLE IF NOT EXISTS staff(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            phone TEXT
        )
    `);

    // CREATE DEFAULT ADMIN IF NOT EXISTS
    db.get("SELECT * FROM users WHERE username = ?", ['admin'], (err, row) => {

        if (err) {
            console.error(err);
            return;
        }

        if (!row) {
            db.run(`
                INSERT INTO users
                (name,email,cell,department,designation,username,password)
                VALUES
                ('System Admin','admin@test.com','03000000000','IT','Administrator','admin','admin123')
            `);

            console.log("Default admin user created.");
        }

    });

});

module.exports = db;