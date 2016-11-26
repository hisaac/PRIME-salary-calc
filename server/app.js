//----------------------------------------------------------------------------//
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./modules/db');
//----------------------------------------------------------------------------//

app.use(bodyParser.json());

// static files
app.use(express.static('./server/public'));

// routes/modules
app.use('/db', db);

// port to listen on
app.listen(3000);
