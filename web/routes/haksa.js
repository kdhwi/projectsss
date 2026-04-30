var express = require('express');
var router = express.Router();
var {getConnection} = require('./connect');

/* 교수관리 페이지 */
router.get('/pro', function(req, res, next) {
  res.render('index', { title: '교수관리', pageName:'haksa/professors.ejs'});
});

/* 교수 데이터 생성 */
router.get('/por/list.json', async function(req, res) {
  var con;
  try {
    con = await getConnection();
    const sql="select * from professors";
    const result = await con.execute(sql, {}, {outFormat:OracleDB.OUT_FORMAT_OBJECT});
    res.send(result.rows);
  } catch (err) {

  } finally {
    if(con) await con.Close();
  }
  res.send('교수 데이터...');
});

/* 학생관리 페이지 */
router.get('/stu', function(req, res, next) {
  res.render('index', { title: '학생관리', pageName:'haksa/students.ejs'});
});

/* 강좌관리 페이지 */
router.get('/cou', function(req, res, next) {
  res.render('index', { title: '강좌관리', pageName:'haksa/courses.ejs'});
});

module.exports = router;
