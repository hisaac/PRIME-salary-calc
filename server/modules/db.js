//----------------------------------------------------------------------------//
var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/salary_calculator';
//----------------------------------------------------------------------------//

// gets all data from database
router.get('/', function(req, res){
  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      console.log('connection error — get table data: ', err);
      res.sendStatus(500);
    } else {
      client.query('SELECT * FROM employeeinfo ORDER BY employee_id;',
        function (err, result) {
          done();
          if (err) {
            console.log('select query error — get table data ', err);
            res.sendStatus(500);
          } else {
            res.send(result.rows);
          }
        }
      );
    }
  });
});

router.post('/', function(req, res){
  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      console.log('connection error — post table data: ', err);
      res.sendStatus(500);
    } else {
      client.query("INSERT INTO employeeinfo (first_name, last_name, employee_id, job_title, salary)" +
        "VALUES ($1, $2, $3, $4, $5)",
        [req.body.firstName, req.body.lastName, req.body.idNumber, req.body.jobTitle, req.body.salary],
        function (err, result) {
          done();
          if  (err) {
            console.log('insert query error — post table data: ', err);
            res.sendStatus(500);
          } else {
            res.sendStatus(200);
          }
        }
      );
    }
  });
});

module.exports = router;
