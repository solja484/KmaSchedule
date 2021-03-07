let express = require('express');
let server = express();
const path = require('path');
let config = require('./config.json');
let bodyParser = require('body-parser');
let currentSeason = 2;


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

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

server.get('/api/faculty', (req, res) => {
    connection.query("SELECT * FROM faculty").then(
        ([results, fields]) =>
            res.json(results));
});
server.get('/api/subfaculty', (req, res) => {
    connection.query("SELECT * FROM subfaculty ORDER BY faculty_id").then(
        ([results, fields]) =>
            res.json(results));
});
server.get('/api/speciality', (req, res) => {
    connection.query("SELECT DISTINCT name, id, faculty_id, level FROM speciality " +
        "ORDER BY speciality.level").then(
        ([results, fields]) =>
            res.json(results));
});

server.get('/api/user', (req, res) => {
    connection.query("SELECT * FROM _user WHERE code='204186'").then(
        ([results, fields]) =>
            res.json(results));
});

server.get('/api/days', (req, res) => {
    connection.query("SELECT * FROM working_days ORDER BY number").then(
        ([results, fields]) =>
            res.json(results));
});

server.get('/api/pairs', (req, res) => {
    connection.query("SELECT * FROM pairs ORDER BY number").then(
        ([results, fields]) =>
            res.json(results));
});

server.get('/api/user/:usercode/courses', (req, res) => {
    connection.query("SELECT course_cdoc as code, season, course.name, " +
        "academic_year, year, hours,credits, level,teacher, status_happened, reg_type " +
        "FROM kma_data.course_season " +
        "INNER JOIN course ON course_season.course_cdoc=course.sub_cdoc " +
        "INNER JOIN course_register ON course_season.course_cdoc=course_register.sub_code " +
        "WHERE course_season.season='2' AND academic_year='2020' AND " +
        "course_register.user_code='204186'AND course_register.deleted='0';").then(
        ([results, fields]) =>
            connection.query("SELECT course_schedule.id as id, course_cdoc, course_schedule.group, lection, pair_id, day_id, weeks, classroom.number FROM course_schedule " +
                "LEFT JOIN classroom ON course_schedule.classroom = classroom.id " +
                "WHERE course_cdoc IN " +
                "(SELECT course_cdoc FROM course_season " +
                "INNER JOIN course ON course_season.course_cdoc=course.sub_cdoc " +
                "WHERE course_season.season='2' AND academic_year='2020' AND status_happened='happened' AND course_cdoc IN " +
                "(SELECT sub_code FROM kma_data.course_register WHERE user_code='204186'AND deleted='0'));").then(
                    ([results2, fields2]) =>res.json({"course_data":results,"course_schedule":results2})));


});