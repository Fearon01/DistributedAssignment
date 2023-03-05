const express = require('express'); 
const cors = require('cors');
const app = express(); 
const mysql = require('mysql');

const path = require('path');

let mysqlConnection = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'joke_norm'
}
 
app.use(cors());

app.use(express.static('./public/html'));
app.use(express.static('./public/img'));
app.use(express.static('./public/css'));
app.use(express.static('./public/js'));

const db = mysql.createConnection(mysqlConnection);

db.connect((err) => {
    if (err) throw err;
    console.log(' --- Connected to MySql database --- ')
});

app.get('/types', (req, res) => {
    sql = 'SELECT * FROM tbl_type'

    db.query(sql, (err, results) => {
        if (err) res.status(500)
        else
            res.json(results)
    })
});

app.get('/jokes', (req, res) => {
    sql = 'SELECT * FROM tbl_jokes'

    db.query(sql, (err, results) => {
        if (err) res.status(500)
        else
            res.json(results)
    })
});

app.get(['/', '/index.html'], (req, res) => {
    res.sendFile('./public/html/index.html')
}); 

app.get('/*', (req, res) => {
    res.status(404).send('404 ERROR')
});

// Had problems with many attempted ports and therefore had to automate to find open port

app.listen(3000, () => console.log('Listening on port 3000'));









// app.get('/time', (req, res) => {
//   let today = new Date();
//   let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//   res.send(time);
// });