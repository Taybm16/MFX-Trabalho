import db from '../connect.db.js'; // Ajuste o caminho conforme necessário


// import db from "../connect.db.js"

export const searchProducts = () =>{

    return new Promise((resolve, reject) => {

        let query = 'SELECT * FROM products'

        db.all(query, [], (error, row) => {
            if(error){
                console.error(error.message)    
            }else{
                console.log(row)
                resolve(row)
            }
        
        })
    }
)}

export const searchProductsByName = (name)=>{
    return new Promise((resolve, reject)=>{

        let query = `SELECT * FROM products where products.name = ${name}`

        db.all(query, [],  (error, row)=>{
            if (error) {
                console.error(error.message)
            }else{
                console.log(row)
                resolve(row)
            }
        })
})}



export const insertNewRegisterProducts = (name, description, image_url,amount, quantity) => {

    return new Promise ((resolve, reject) => {
        
        let query = `INSERT INTO products (name, description, image_url,amount, quantity) VALUES (?, ?, ?, ?, ?)`
        let params = [name, description, image_url,amount, quantity]
    
        db.run(query, params, (error) => {
            if (error) {
                console.error(error.message);
            }else{
                db.get('SELECT last_insert_rowid() as id', (error, row)=> {
                    if (error){
                        console.error(error.message);
                        reject()
                    }else{
                        console.log('Produto registrado com sucesso:')
                        resolve(row)
                    }
                })
            }
        })

    })
}



export const updateProductsInfo = (code, name, description, image_url,amount, quantity) => {

    return new Promise ((resolve, reject) => {
        
        let query = `UPDATE products SET 
                                    name=?, 
                                    description=?, 
                                    image_url=?, 
                                    amount=?,
                                    quantity=? 
                                    WHERE products.code=${code}`;

        let params = [code, name, description, image_url,amount, quantity];
    
        db.run(query, params, (error, changes) => {
            if (error) {
                reject({message: err.message});
            }else{
                if(changes === 0){
                    reject({message: 'Product is not found!'})
                }else{
                    resolve({
                        name: name,
                         description:description, 
                         image_url:image_url, 
                         amount:amount,
                         quantity:quantity, 
                    })
                }
            }
        })

    })
}

// updateUserInfo("3","Eduardo","41441212864","Active", "05/10/2024")


export const deleteProducts = (id) => {

    return new Promise ((resolve, reject) => {
        
        let query = `DELETE FROM products WHERE products.id=?`;
    
        db.run(query, [id], (error, changes) => {
            if (error) {
                reject({message: 'Product is not found!'});
            }else{
                if(changes === 0){
                    reject({message: 'Deletado com sucesso!'})
                    resolve({
                        id: id
                    });
                }
            }
        });

    });
};


