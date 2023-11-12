import mysql from 'mysql'

var pass = 'Parlane78'

export function createUserRequest(data){
    let query = 'insert into autoservis1 (type, name, contact, message, datetime, status) values (?, ?, ?, ?, NOW(), "step1");'
    const connection = mysql.createConnection({
        client:'mysql2',
        host: "localhost",
        user: "alartroot",
        database: "autoservis1",
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
  
    let date = getTodayDate()

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