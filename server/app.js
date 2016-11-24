//----------------------------------------------------------------------------//
var express = require('express');
var app = express();
var db = require('./modules/db');
//----------------------------------------------------------------------------//

// static files
app.use(express.static('./server/public'));

// routes/modules
app.use('/db', db);

// port to listen on
app.listen(3000);
