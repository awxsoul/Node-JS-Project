const mysql = require("mysql2");
//extracting mysql from mysql2

const connection = mysql.createConnection({
    host:"127.0.0.1",
    user: "root",
    password: "Basement2024",
    database: "movies"
})

connection.connect((err)=> {   //err is undefined if there is no error
    if(err){
        console.log(`Database Error : ${err}`);
    }
    else{
        console.log(`Database connected successfully`)
    }
})

module.exports ={ connection }; 
//export a object from one file to another file