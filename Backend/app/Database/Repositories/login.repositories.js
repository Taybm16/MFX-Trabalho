import db from '../connect.db.js'; // Ajuste o caminho conforme necessário



export const searchLogin = () =>{

    return new Promise((resolve, reject) => {

        let query = 'SELECT * FROM login'

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


export const searchUsersByCPF = (id)=>{
    return new Promise((resolve, reject)=>{

        let query = `SELECT * FROM login where login.id = ${id}`

        db.all(query, [],  (error, row)=>{
            if (error) {
                console.error(error.message)
            }else{
                console.log(row)
                resolve(row)
            }
        })
})}
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
                console.log('Login registrado com sucesso:');
                resolve(row);
            });
        });
    });
};
// 
// export const insertNewRegisterLogin = (password,created_at,update_at,status,email ) => {

//     return new Promise ((resolve, reject) => {
        
//         let query = `INSERT INTO login (password,created_at,update_at,status,email) VALUES (?, ?, ?, ?, ?)`
//         let params = [password,created_at,update_at,status,email]
    
//         db.run(query, params, (error) => {
//             if (error) {
//                 console.error(error.message);
//             }else{
//                 db.get('SELECT last_insert_rowid() as id', (error, row)=> {
//                     if (error){
//                         console.error(error.message);
//                         reject()
//                     }else{
//                         console.log('Login registrado com sucesso:')
//                         resolve(row)
//                     }
//                 })
//             }
//         })

//     })
// }


export const updateLoginInfo = (password,created_at,update_at,status,email) => {

    return new Promise ((resolve, reject) => {
        
        let query = `UPDATE login SET 
                                    password=?, 
                                    created_at=?, 
                                    status=?, 
                                    update_at=?,
                                    email=?,
                                    WHERE login.code=${code}`;
        let params = [password,created_at,update_at,status,email];
    
        db.run(query, params, (error, changes) => {
            if (error) {
                reject({message: err.message});
            }else{
                if(changes === 0){
                    reject({message: 'Login is not found!'})
                }else{
                    resolve({
                        password: password,
                        created_at:created_at,
                        email: email,
                        status: status,
                        update_at: update_at
                    })
                }
            }
        })

    })
}




export const deleteLogin = (id) => {

    return new Promise ((resolve, reject) => {
        
        let query = `DELETE FROM login WHERE login.id=?`;
    
        db.run(query, [id], (error, changes) => {
            if (error) {
                reject({message: 'Login is not found!'});
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
