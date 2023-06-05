const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const mySql = require('mysql')
const cors = require('cors')
const path = require('path')
require('dotenv').config({path:"./../src/.env"})

console.log(process.env.USER1)
const db = mySql.createPool({
    host:process.env.HOST,
    user:process.env.USER1,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.post("/api/insert",(req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const sqlInsert = "INSERT INTO Portfolio (name,email,message) VALUES (?,?,?)";
    db.query(sqlInsert,[name,email,message],(err,result)=>{
    console.log(err)
})
    res.send({status:'success'})
})


app.listen(3001,()=>{
    console.log('running on port 3001')
})