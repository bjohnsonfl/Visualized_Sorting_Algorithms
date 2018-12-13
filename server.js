var express = require("express");
var app = express();
var path = require("path");
app.use("/", express.static(__dirname));

var port = process.env.PORT || 3000;        
app.listen(port);
console.log("Listening on " + port);