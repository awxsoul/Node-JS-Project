// express modeule is taken from the express package
const express = require('express') 
const app = express() //
const port = 3000
// different port numbers are used for various multi connection with same ip address?
const {connection}= require("./db/db_config");
//looks for the connection object

//similar to flask, each route is triggering the request methods
app.get('/', (req, res) => { 
    let user=req.query.name
    let number=req.query.id
    // request query, goes throughh the url and gets the name value
    // res.send(`Hello ${user}! <br> Your Id is ${number}<br><br>`);

    let n1=parseFloat(req.query.num1)
    let n2=parseFloat(req.query.num2)
    let op=req.query.operation
    let op_name,n3
    
    if(op=="add"){
        n3=n1+n2
        op_name="addition"
    }
    if(op=="sub"){
        n3=n1-n2
        op_name="subration"
    }
    if(op=="mul"){
        n3=n1*n2
        op_name="multiplication"
    }
    if(op=="div"){
        n3=n1/n2
        op_name="division"
    }
    
    res.send(`Number1 :${n1} <br> Number2 :${n2} <br><h2>Result of ${op_name} ${n3}</h2>`)

    //you can only respond once.
}) 
//res - response
//req - request object

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})