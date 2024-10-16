import db from '../connect.db.js'; // Ajuste o caminho conforme necessário

export const searchLogin = () => {
    return new Promise((resolve, reject) => {
        let query = 'SELECT * FROM login';
        db.all(query, [], (error, rows) => {
            if (error) {
                console.error(error.message);
                return reject(error); // Rejeitar a promessa se houver erro
            } 
            console.log(rows);
            resolve(rows);
        });
    });
};

export const searchUsersByCPF = (id) => {
    return new Promise((resolve, reject) => {
        let query = `SELECT * FROM login WHERE login.id = ?`;
        db.get(query, [id], (error, row) => {
            if (error) {
                console.error(error.message);
                return reject(error);
            }
            console.log(row);
            resolve(row);
        });
    });
};

export const insertNewRegisterLogin = (password, created_at, update_at, status, email) => {
    return new Promise((resolve, reject) => {
        let query = `INSERT INTO login (password, created_at, update_at, status, email) VALUES (?, ?, ?, ?, ?)`;
        let params = [password, created_at, update_at, status, email];

        db.run(query, params, function (error) {
            if (error) {
                console.error(error.message);
                return reject(error); // Rejeitar a promessa se houver erro
            }
            db.get('SELECT last_insert_rowid() as id', (error, row) => {
                if (error) {
                    console.error(error.message);
                    return reject(error);
                }
                console.log('Login registrado com sucesso:', row);
                resolve(row);
            });
        });
    });
};

export const updateLoginInfo = (id, password, created_at, update_at, status, email) => {
    return new Promise((resolve, reject) => {
        let query = `UPDATE login SET 
                     password=?, 
                     created_at=?, 
                     update_at=?, 
                     status=?, 
                     email=? 
                     WHERE id=?`; // Utilizar 'id' para atualização
        let params = [password, created_at, update_at, status, email, id];

        db.run(query, params, function (error) {
            if (error) {
                console.error(error.message);
                return reject(error);
            }
            if (this.changes === 0) {
                return reject({ message: 'Login not found!' });
            }
            resolve({ id, password, created_at, status, update_at, email });
        });
    });
};

export const deleteLogin = (id) => {
    return new Promise((resolve, reject) => {
        let query = `DELETE FROM login WHERE id=?`;
        
        db.run(query, [id], function (error) {
            if (error) {
                console.error(error.message);
                return reject({ message: 'Error deleting login.' });
            }
            if (this.changes === 0) {
                return reject({ message: 'Login not found!' });
            }
            resolve({ id });
        });
    });
};
