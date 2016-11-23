var express = require('express');
var app = express();
//----------------------------------------------------------------------------//

// static files
app.use(express.static('./server/public'));

app.listen(3000);
