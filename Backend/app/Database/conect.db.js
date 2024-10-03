import path from 'path';
import sqlite3 from 'sqlite3';

const dbPath = path.resolve(process.cwd(), 'app/database/nerdHouse.database.db');

const db = new sqlite3.Database(dbPath, (error) => {
    if (error) throw error;
    console.log(' Connect database sucess!');
});

export default db;
