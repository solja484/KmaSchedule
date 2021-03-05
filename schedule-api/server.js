let express = require('express');
let server = express();
const path = require('path');
let config = require('./config.json');
let bodyParser = require('body-parser');

const mysql = require("mysql2");
server.use(express.static(path.join(__dirname, '../schedule-vue/build')));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));


server.listen(3080, () => {
    console.log('listening on 3080')
});

//connect to mysql database
const connection = mysql.createConnection({
    host: config.host,
    user: "root",
    database: "kma_data",
    password: "mysql"
}).promise();


server.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

server.get('/api/faculty', (req,res) => {
    connection.query("SELECT * FROM faculty").then(
        ([results, fields]) =>{
            console.log('api/faculty called!!!!!!!');
            res.json(results)});
});
