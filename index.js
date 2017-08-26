var express = require('express');
var app = express();

var server = require('http').Server(app);

app.get('/', function(req,res){
      res.status(200).send({'parametro': 'jorge'});
});
server.listen(8080, function(){
  console.log("servidor corriedo 8080");
});
