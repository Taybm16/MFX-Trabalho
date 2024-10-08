import db from '../Database/connect.db.js'

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

console.log(searchLogin())