(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText("%3CHTML%3E%0D%0A");
commands.writeEscapedText("%09%09");commands.write("<head><title>Validar Datos</title></head>");commands.writeEscapedText("%0D%0A");
commands.writeEscapedText("%09%3CBODY%20bgcolor%3D%22olive%22%3E%0D%0A");
commands.writeEscapedText("%20%0D%0A");
commands.writeEscapedText("%09%09");
		  var x= lib.VistaControlCarrera;
		  var y=new x.VistaControlCarrera();
		
		  y.Capturar(request.parameters.carrera,request.parameters.creditos,request.parameters.clave,request.parameters.area,request.parameters.tipo);
		commands.writeEscapedText("%0D%0A");
commands.writeEscapedText("%20%20%20%20%20%20%20%20%20"); commands.sendRedirect("./index.html");commands.writeEscapedText("%0D%0A");
commands.writeEscapedText("%20%0D%0A");
commands.writeEscapedText("%20%0D%0A");
commands.writeEscapedText("%09%3C/BODY%3E%0D%0A");
commands.writeEscapedText("%3C/HTML%3E%0A");
})