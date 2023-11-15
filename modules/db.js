import mysql from 'mysql'

var pass = '********************'

export function createUserRequest(data){
    let query = 'insert into userRequests (type, name, contact, message, datetime, status) values (?, ?, ?, ?, NOW(), "step1");'
    const connection = mysql.createConnection({
        client:'mysql2',
        host: "********************",
        user: "********************",
        database: "********************",
        password: pass
    });
    
    connection.connect( err => {
        if(err){
            console.log(err)
            console.log('con.connect.createUserRequest error')
        }
        else
        {
            
        }
    });
  

    connection.query(query, [data.type, data.name, data.contact, data.message], (err, result) => {
        if(err){
            console.log(err)
            console.log('conn.query.createUserRequest error')
            
        }
        else{
            console.log(result)
        }
    })
  
    connection.end()
}

export function loadUserRequests() {
    return new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
        client:'mysql2',
        host: "********************",
        user: "********************",
        database: "********************",
        password: pass
    });
    
    connection.connect( err => {
        if(err){
            console.log(err)
            console.log('con.connect.loadUserRequests error')
            reject(err)
        }
        else
        {
            //console.log("DATABASE CONNECTED");
        }
    });
    let query = 'SELECT * from userRequests;'
    connection.query(query, (err, result) => {
        if(err){
            console.log(err)
            console.log('conn.query.loadUserRequests error')
            reject(err)
        }
        else{
            resolve(result)
        }
    })
  
    connection.end()
    })
}
