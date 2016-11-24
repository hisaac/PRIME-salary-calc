//----------------------------------------------------------------------------//
var express = require('express');
var app = express();
var db = require('./modules/db');
//----------------------------------------------------------------------------//

// static files
app.use(express.static('./server/public'));

// port to listen on
app.listen(3000);
