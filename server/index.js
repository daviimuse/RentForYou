const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: '127.0.0.1',
    password: 'root',
    database: 'rentforyouDB',
    port: 3001,
});

app.listen(3001, () => {
    console.log('Server started on port 3001.');
});

db.connect(function(err) {
    console.log('Trying to connect to database...');
    if (err) {
      return console.error('error: ' + err.message);
    }else{
        console.log('Connected to the MySQL server.');
        }
    }
);

app.post("/register", (req, res) =>{
    const username = req.body.usrn
    const name = req.body.name
    const surname = req.body.surname
    const mail = req.body.mail
    const password = req.body.psw

    db.query(
        "INSERT INTO usersLoginInfo (usrn,name,surname,mail,psw) VALUES (?,?,?,?,?)",
        [username, name, surname, mail, password],
        (err,result)=>{
        console.log(result);
        console.log(err);
            }
        )
    }
);

