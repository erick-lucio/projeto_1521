const mysql = require('mysql')


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'server_node_erick_mysql'
    
    
})

connection.connect(function(err){
    if(err){
        console.log(err)
        return;
    }
    //console.log('connected as id ' + connection.threadId)
});


module.exports = connection;