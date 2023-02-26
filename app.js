const express = require('express'); 
const cors = require('cors');
const app = express(); 

const path = require('path');

app.use(cors());

app.use(express.static('./public/html'));
app.use(express.static('./public/img'));
app.use(express.static('./public/css'));
app.use(express.static('./public/js'));

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