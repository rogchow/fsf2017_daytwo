//load exprss and path
var path = require("path");
var express = require("express");

//create and instance of an express app
var app = express();

var img_url = ["IMG_0003.png", "IMG_0004.jpg","IMG_0005.jpg"];

// Define routes
app.use("/stocks", express.static(__dirname + "/images"));

// Redirect to this route when it can't find the file
/*app.use(function(req,resp) {
    resp.status(404);  // because server can't find the file (by default it is index.html)
    resp.type("text/html");
    resp.send("<img src='" + img_url[parseInt(Math.random() * img_url.length)] + "'>");
});*/

// console.log(">>__dirname: " + __dirname);
 

//configure port
app.set("port", parseInt(process.argv[2]) || parseInt(process.env.APP_port) || 3000);

// Start of app
app.listen(app.get("port"), function() {
    console.log("Application is listening on port" + app.get("port"));
    console.log("yaaaah..");
});


//app.use(function(req,resp) {
//    resp.send("Hello, this is a dynamic picture pages");
   // app.use['/picture[1]', '/picture[2]', '/picture[3]', '/picture[4]','/picture[5]']
    
    //app.use(express.static(__dirname + "/public"[i]));
//});



//var strPort = prceoss.argv[2];
//if (strPort)
  //  port = parseInt(strPort);
//else    
  //  port = 3000
//console.log("port: %s, type=%s", port, typeof port)

//console.log("port is " + app.get("port"));
//console.log("application start at port " + app.get("port"));



//console.log("user typed this at argv[2] " + process.argv[2]);

//console.log("environment set to " + process.env.APP_port);

//var 
//if (port)

//print out the elements of argv

//for (var i = 0; i < process.argv.length; i++)
  //  console.log("argv[%d] = %s type=%s", i, process.argv[i], typeof process.argv[i]);

