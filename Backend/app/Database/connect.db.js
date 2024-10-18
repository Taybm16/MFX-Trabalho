import path from 'path';
import sqlite3 from 'sqlite3';

const dbPath = path.resolve(process.cwd(), 'app/Database/nerdHouse.database.db');

const db = new sqlite3.Database(dbPath, (error) => {
    if (error) throw error;
    console.log('Connected to the database successfully!');
});

export default db;
