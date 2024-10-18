import db from '../connect.db.js';



// Função para buscar todos os produtos
export const searchProducts = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM products';

        db.all(query, [], (error, rows) => {
            if (error) {
                console.error(error.message);
                reject(error); // Rejeita a promessa com erro
            } else {
                console.log(rows);
                resolve(rows); // Retorna as linhas encontradas
            }
        });
    });
};

// Função para buscar produtos por nome
export const searchProductsByName = (name) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM products WHERE name = ?`;

        db.all(query, [name], (error, rows) => {
            if (error) {
                console.error(error.message);
                reject(error);
            } else {
                console.log(rows);
                resolve(rows);
            }
        });
    });
};

// Função para inserir um novo produto
export const insertNewRegisterProducts = (name, description, image_url, amount, quantity) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO products (name, description, image_url, amount, quantity) VALUES (?, ?, ?, ?, ?)`;
        const params = [name, description, image_url, amount, quantity];

        db.run(query, params, function (error) {
            if (error) {
                console.error(error.message);
                reject(error); // Rejeita com erro
            } else {
                console.log('Produto registrado com sucesso:', this.lastID);
                resolve({ id: this.lastID, name, description, image_url, amount, quantity }); // Retorna o novo produto
            }
        });
    });
};

// Função para atualizar informações do produto
export const updateProductsInfo = (code, name, description, image_url, amount, quantity) => {
    return new Promise((resolve, reject) => {
        const query = `UPDATE products SET name = ?, description = ?, image_url = ?, amount = ?, quantity = ? WHERE code = ?`;
        const params = [name, description, image_url, amount, quantity, code];

        db.run(query, params, function (error) {
            if (error) {
                console.error(error.message);
                reject(error);
            } else {
                if (this.changes === 0) {
                    reject({ message: 'Produto não encontrado!' });
                } else {
                    resolve({ code, name, description, image_url, amount, quantity }); // Retorna o produto atualizado
                }
            }
        });
    });
};

// Função para deletar um produto
export const deleteProducts = (id) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM products WHERE id = ?`;

        db.run(query, [id], function (error) {
            if (error) {
                console.error(error.message);
                reject({ message: 'Erro ao deletar produto.' });
            } else {
                if (this.changes === 0) {
                    reject({ message: 'Produto não encontrado.' });
                } else {
                    resolve({ message: 'Produto deletado com sucesso!', id });
                }
            }
        });
    });
};
