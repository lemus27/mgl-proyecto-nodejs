(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText(""); 
		  var z=request.parameters.button;
		  var x= lib.VistaControlgrupo;
		  var y=new x.VistaControlgrupo();
		  
		  if(z=="Guardar"){
		  y.Modificar(request.parameters.grupo,request.parameters.numero,request.parameters.nombre,request.parameters.actividad,request.parameters.ubicacion);
		  commands.sendRedirect("./index.html");
		  }
		  if(z=="Eliminar"){
		  y.Eliminar(request.parameters.radios);
		  commands.sendRedirect("./index.html");
		  }
	
		  if(z=="Editar"){
		  y.valPos(request.parameters.radios);
		  commands.sendRedirect("./Editar.html");
		  }
		  if(z=="Salir"){
		  commands.sendRedirect("./index.html");
		  }
		  if(z=="Guardar en Archivo"){
		  y.saveCambios();
		  commands.sendRedirect("./index.html");
		  }
		 

})