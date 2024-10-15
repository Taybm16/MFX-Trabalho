import db from '../connect.db.js'; // Ajuste o caminho conforme necessário



export const searchUsers = () =>{

    return new Promise((resolve, reject) => {

        let query = 'SELECT * FROM users'

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



export const searchUsersByCPF = (cpf)=>{
    return new Promise((resolve, reject)=>{

        let query = `SELECT * FROM users where users.cpf = ${cpf}`

        db.all(query, [],  (error, row)=>{
            if (error) {
                console.error(error.message)
            }else{
                console.log(row)
                resolve(row)
            }
        })
})}

// console.log(searchUsers("35866777827"))


export const insertNewRegisterUser = (name, cpf, status, created_at , update_at) => {

    return new Promise ((resolve, reject) => {

        let query = `INSERT INTO users (name, cpf, status, created_at, update_at) VALUES (?, ?, ?, ?, ?)`
        let params = [name, cpf, status, created_at , update_at]

        db.run(query, params, (error) => {
            if (error) {
                console.error(error.message);
            }else{
                db.get('SELECT last_insert_rowid() as id', (error, row)=> {
                    if (error){
                        console.error(error.message);
                        reject()
                    }else{
                        console.log('Usuario registrado com sucesso:')
                        resolve(row)
                    }
                })
            }
        })

    })
}


// console.log(searchUsers("35866777827"))

// insertNewRegisterUser ('Gislena Alchangelo','11532095864','Ativa','04/10/2024','04/10/2024').then()

// console.log(user)


export const updateUserInfo = (code, name, cpf, status, update_at) => {

    return new Promise ((resolve, reject) => {
        
        let query = `UPDATE users SET 
                                    name=?, 
                                    cpf=?, 
                                    status=?, 
                                    update_at=? 
                                    WHERE users.code=${code}`;
        let params = [name, cpf, status, update_at];
    
        db.run(query, params, (error, changes) => {
            if (error) {
                reject({message: error.message});
            }else{
                if(changes === 0){
                    reject({message: 'user is not found!'})
                }else{
                    resolve({
                        name: name,
                        cpf: cpf,
                        status: status,
                        update_at: update_at
                    })
                }
            }
        })

    })
}

// updateUserInfo("3","Eduardo","41441212864","Active", "05/10/2024")


export const deleteUser = (id) => {

    return new Promise ((resolve, reject) => {
        
        let query = `DELETE FROM users WHERE users.id=?`;
    
        db.run(query, [id], (error, changes) => {
            if (error) {
                reject({message: 'user is not found!'});
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
