var http = require('http');
var url = require ("url");
var querystring= require("querystring");
var fs= require ("fs");

http.createServer(function (req, res) {

var pathname = url.parse(req.url).pathname;

if(pathname == "/"){

res.writeHead(0, {'Content-Type': 'text/html'});
html  = fs.readFileSync('form.html','utf8');
res.write(html);
}

else if(req.method=="POST") {
   
	console.log("[0] " + req.method + " to " + req.url);
    var fullBody = '';
    
    req.on('data', function(chunk) {
     
      fullBody += chunk.toString();
    });
	
	req.on('end', function() {
	  
	  var decodedBody = querystring.parse(fullBody);
      var post= JSON.stringify(decodedBody);
          post=JSON.parse(post) ;

		  txt1= post.dat1.toString();
          txt2= post.dat2.toString();
		  txt3= post.dat3.toString();
          txt4= post.dat4.toString();
		  txt5= post.dat5.toString();
          
      var resultado=(txt1)+" "+(txt2)+" "+(txt3)+" "+(txt4)+" "+(txt5);
			res.write("Los datos son: ");
	        res.write(resultado.toString());
			
	res.end();
		});
	function leerarchivo(){//funcion para leer el archivo csv
var fs = require('fs');
var data = fs.readFileSync('./base.csv', 'utf8');
// wait for the result, then use it
res.write(data.toString());
var fs = require('fs');
}//fin de leer archivo csv	
			
}
   
   
}).listen(8888,'127.0.0.1');//.listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');