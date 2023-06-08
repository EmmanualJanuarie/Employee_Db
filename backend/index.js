//-----------fabricating and assigning variables to json packages[Start]------------//
const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

//-----------fabricating and assigning variables to json packages[END]------------//

const port = process.env.port || 8082;
const app = express() /*creating an app variable that will be assigned to express*/

app.use(cors());
app.use(express.json());//changes or parse the data

//connecting to database
const db = mysql.createConnection({//parsing the properties
   host: "eu-cdbr-west-03.cleardb.net",
   username:"b570a914c0ab6c",
   password:"5aae640c",
   database:"heroku_eb29374b42be078"
      
});


app.post('/signup', (req,res)=> {//creating api for signup
    const sql ="INSERT INTO login (`Name`, `Surname`, `Department`, `email`,` password`, `confirmPassword`) VALUES (?)";
    const values = [//Capturing Data 
        req.body.Name,//parsing name
        req.body.Surname,//parsing surname
        req.body.Department,//parsing deparment
        req.body.email,//parsing email
        req.body.password,//parsing password
        req.body.confirmPassword//parsing confirm password
    ]

    db.query(sql, [values],(err,data)=>{
        if (err)return res.json(err);
        
        return res.json(data);
    })
})



app .listen(8082, ()=> {
        console.log(`Sever is listening on ${port}`)//running the server
    });

    