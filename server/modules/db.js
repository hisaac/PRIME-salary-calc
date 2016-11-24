//----------------------------------------------------------------------------//
var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/salary_calculator';
//----------------------------------------------------------------------------//

// gets all data from database
router.get('/', function(req, res){
  console.log('router.get was called');
});

// adds new data to database
// router.post()

module.exports = router;
