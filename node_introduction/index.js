console.log('index.js executing');

var express = require('express');
var app = express();

app.get('/',function(req,res){
res.send('hello there!');
});
var port = 3000;
app.listen(port,function(){
console.log('listening on port ' + port);
});
