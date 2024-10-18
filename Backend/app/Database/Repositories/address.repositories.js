import db from '../connect.db.js';


// Inserir um novo endereço
export const insertNewAddress = (email, street, city,zip_code,number, state,country ) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO address (email, street, city,zip_code,number, state,country ) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const params = [email, street, city,zip_code,number, state,country ];

        db.run(query, params, function (error) {
            if (error) {
                console.error(error.message);
                return reject(error);
            }
            resolve({ id: this.lastID, email, street, city,zip_code,number, state,country });
        });
    });
};

// Buscar endereços pelo email
export const searchAddressesByEmail = (email) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM address WHERE email = ?`;

        db.all(query, [email], (error, rows) => {
            if (error) {
                console.error(error.message);
                return reject(error);
            }
            resolve(rows);
        });
    });
};

// Atualizar um endereço
export const updateAddress = (addressId, street, city,zip_code,number, state,country ) => {
    return new Promise((resolve, reject) => {
        const query = `UPDATE address SET street = ?, city = ?,zip_code=?,number=?, state = ?, country = ? WHERE id = ?`;
        const params = [street, city,zip_code,number, state,country, addressId];

        db.run(query, params, function (error) {
            if (error) {
                console.error(error.message);
                return reject(error);
            }
            if (this.changes === 0) {
                return reject({ message: 'Endereço não encontrado!' });
            }
            resolve({ id: addressId, street, city,zip_code,number, state,country });
        });
    });
};

// Deletar um endereço
export const deleteAddress = (addressId) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM address WHERE id = ?`;

        db.run(query, [addressId], function (error) {
            if (error) {
                console.error(error.message);
                return reject({ message: 'Erro ao deletar endereço.' });
            }
            if (this.changes === 0) {
                return reject({ message: 'Endereço não encontrado!' });
            }
            resolve();
        });
    });
};
