// express modeule is taken from the express package
const express = require('express') 
const cors = require("cors");
const app = express()
app.use(cors())
const port = 3000

const {connection}= require("./db/db_config");

//all records
app.get('/', (req, res) => { 
    connection.query(`SELECT * FROM student_marks`,(err,results)=>{
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

//to get the topper
app.get('/getTopper', (req, res) => { 
    connection.query(`SELECT * FROM student_marks WHERE marks = ( SELECT MAX(marks) FROM student_marks)`,(err,results)=>{
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

//to get the list of failures
app.get('/getFailedList', (req, res) => { 
    connection.query(`select * from student_marks where marks<50`,(err,results)=>{
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