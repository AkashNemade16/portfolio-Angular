const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const mySql = require('mysql')
const cors = require('cors')
const db = mySql.createPool({
    host:'srv565.hstgr.io',
    user:'u176740262_akashNemade',
    password:'Portfolio$123',
    database:'u176740262_portfolio'
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
})


app.listen(3001,()=>{
    console.log('running on port 3001')
})