// database.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Database path
const dbPath = path.join(__dirname, 'users.db');
const db = new sqlite3.Database(dbPath);

// Create table if not exists
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        cell TEXT,
        department TEXT,
        designation TEXT,
        username TEXT,
        password TEXT
    )`);

    // Insert default admin if not exists
    db.get("SELECT * FROM users WHERE username='admin'", (err,row)=>{
        if(!row){
            db.run(`INSERT INTO users (name,email,cell,department,designation,username,password)
                VALUES ('System Admin','admin@test.com','03000000000','IT','Administrator','admin','admin123')`);
        }
    });
});

module.exports = db;