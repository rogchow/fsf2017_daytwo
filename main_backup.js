//load exprss and path
var path = require("path");
var express = require("express");

//create and instance of an express app
var app = express();

//Define routes
app.use(express.static(__dirname + "/public"));
console.log(">>__dirname: " + __dirname);

//configure port
app.set("port", parseInt(process.argv[2]) || parseInt(process.env.APP_port) || 3000);
//var strPort = prceoss.argv[2];
//if (strPort)
  //  port = parseInt(strPort);
//else    
  //  port = 3000
//console.log("port: %s, type=%s", port, typeof port)

//console.log("port is " + app.get("port"));
console.log("application start at port " + app.get("port"));

app.listen(app.get("port"), function() {
    console.log("Application is listening on port" + app.get("port"));
    console.log("yaaaah..");
});


//console.log("user typed this at argv[2] " + process.argv[2]);

//console.log("environment set to " + process.env.APP_port);

//var 
//if (port)

//print out the elements of argv

//for (var i = 0; i < process.argv.length; i++)
  //  console.log("argv[%d] = %s type=%s", i, process.argv[i], typeof process.argv[i]);

