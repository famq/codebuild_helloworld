var express = require('express');

//Constants
const PORT = 8080;

//App
var app = express();
app.get('/', function(req, res){
      res.send('Hello md world!\n');
});

app.listen(PORT);
console.log('Server running on 8080');
