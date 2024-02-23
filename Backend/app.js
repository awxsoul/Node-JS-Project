// express modeule is taken from the express package
const express = require('express') 
const app = express() //
const port = 3000
// different port numbers are used for various multi connection with same ip address?
const {connection}= require("./db/db_config");
//looks for the connection object

//similar to flask, each route is triggering the request methods
app.get('/', (req, res) => { 
    let userinput= req.query.text
    connection.query(`select * from movie_data where tittle like ?`,[`${userinput}%`],(err,results)=>{
        if (err) {
            console.log(`Error in Query`)
            res.send("Error")
        }
        else {
            console.log(`Successfully Excetuted Query`)
            res.send(results)
        }
    })
}) 
//res - response
//req - request object

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})