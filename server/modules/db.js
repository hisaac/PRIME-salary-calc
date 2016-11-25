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
      client.query('SELECT * FROM employeeinfo;',
        function (err, result) {
          done();
          console.log(result);
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

// adds new data to database
// router.post()

module.exports = router;
