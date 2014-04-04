var http = require("http");
var querystring= require("querystring");
var port = 3000;
var serverUrl = "localhost";

var server = http.createServer(function(req, res) {

  console.log("Request: " + req.url);
  
  var now = new Date();
  var html = "<p>Hello World, the time is " + now + ".</p>";
  if (req.method == 'POST') {
    console.log("[200] " + req.method + " to " + req.url);
    var fullBody = '';
    
    req.on('data', function(chunk) {
      // append the current chunk of data to the fullBody variable
      fullBody += chunk.toString();
    });
    
    req.on('end', function() {
    
      // request ended -> do something with the data
      res.writeHead(200, "OK", {'Content-Type': 'text/html'});
      
      // parse the received body data
      var decodedBody = querystring.parse(fullBody);
      //var post=JSON.parse(decodedBody)
 
      // output the decoded data to the HTTP response          
      res.write('<html><head><title>Post data</title></head><body><pre>');
      //res.write(utils.inspect(decodedBody));
     // res.write(post);
      res.write('</pre></body></html>');
      
      res.end();
    });
    
  } else {
    console.log("[405] " + req.method + " to " + req.url);
    res.writeHead(405, "Method not supported", {'Content-Type': 'text/html'});
    res.end('<html><head><title>405 - Method not supported</title></head><body><h1>Method not supported.</h1></body></html>');
  }
  res.end(html);

});

console.log("Listening at " + serverUrl + ":" + port);
server.listen(process.env.PORT, process.env.IP);//.listen(8888, '127.0.0.1');