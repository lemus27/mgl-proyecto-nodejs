var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname;
  //console.log("Reques for" + pathname + "received.");
  
  if(pathname == "/"){
  res.writeHead(200, {'Content-Type': 'text/html'});
 res.write(
'<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">'+
'<html lang="en">'+
  '<head>'+
   '<script src="saludos.js"  type="text/javascript"></script>'+
    '<title>Prueba con HTML5</title>'+
    '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">'+
  '</head>'+
  '<body>'+
   '<header> <!-- Cabecera de la página -->'+
    '<nav> <!-- Menú de la aplicación -->'+
      '<ul><!-- define una lista desordenada-->'+
       '<li>item1</li>'+
       '<li>item2</li>'+
      '</ul>'+
      '</nav>'+
   '</header>'+
   '<section><!-- define una seccion del documento-->'+
     '<article><!-- define un articulo-->'+
      '<header>'+
       '<h2>Título de artículo 1</h2>'+
        '<p>Posteado el <time datetime="2011-03-04T16:31:24+02:00">4 de Marzo 4th de 2011</time> por <a href="#">Escritor</a> - <a href="#">6 comentarios</a></p>'+
       '</header>'+
       '<p>Extracto del primer post.</p>'+
        '</article>'+
     '<article>'+
       '<header><!-- define un encabezado para un documento o sección -->'+
        '<h2>Título de artículo 2</h2>'+
         '<p>Posteado el <time datetime="2011-03-04T16:31:24+02:00">4 de Marzo 4th de 2011</time> por <a href="#">Escritor</a> - <a href="#">6 comentarios</a></p>'+
       '</header>'+
          '<p>Extracto del segundo post.</p>'+
     '</article>'+
  '</section>'+
    '<aside><!-- define el contenido lateral del contenido de una pagina-->'+
        '<h2>Barra lateral de la página</h2>'+
         '<p>Texto de la barra lateral de la página.</p>'+
      '</aside>'+
      '<footer><!-- define un pie de página footer un documento o sección-->'+
       '<p>Copyright 2011 La Villa Digital</p>'+
      '</footer>'+
	'<script type="text/javascript"> (function(){saludar()})();</script>'+
    '</body>'+
'</html>');
}else if(pathname == "/saludos.js"){
  res.writeHead(200, {'Content-Type': 'text/javascript'});
  res.write("saludar = function(){alert('hola desde node');}");
}
res.end();
}).listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');