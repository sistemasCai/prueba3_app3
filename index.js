var express = require('express');
var app = express();

var server = require('http').Server(app);

app.get('/', function(req,res){

});
server.listen(8080, function(){
  console.log("servidor corriedo 8080");
});
