var archivo = require("./archivo");
var modelo = require("./modelo");
var arreglo = require("./arreglo");



var leer = function(){
	i=0;
	var array = archivo.leer();
	var json="";
	var array2="";
	var objToJson="";
	//console.log(array.length);
	//console.log(array[0]);
	for(i=0;i<array.length;i++){
		var objeto = new modelo.alumnos();
		//console.log(i);
		objeto.setNombre(array[i][0]);
		objeto.setEdad(array[i][1]);
		objeto.setCarrera(array[i][2]);
		objeto.setSemestre(array[i][3]);
		objeto.setNumero(array[i][4]);
		if((array[i][0])!=""){
		arreglo.insertar(objeto);
		}		
		};
	array2=arreglo.getArray();
	objToJson={
		datos:array2
	};
	json = JSON.stringify(objToJson);
	//console.log(objToJson);
	//a=arreglo.getArray();
	//console.log(a);
	//json=JSON.stringify(objToJson);
	
	return json;
}

var agregar = function(req){
	var array=0;
	var objToJson=0;
	var nombre="";
	var edad=0;
	var carrera="";
	var semestre="";
	var numero="";
	var objeto = new modelo.alumnos();
	nombre = req.body.nombre;
	edad = req.body.edad;
	carrera = req.body.carrera;
	semestre = req.body.semestre;
	numero = req.body.numero;
	objeto.setNombre(nombre);
	objeto.setEdad(edad);
	objeto.setCarrera(carrera);
	objeto.setSemestre(semestre);
	objeto.setNumero(numero);
	//console.log("antes de ObjtoJson"+objeto)
	arreglo.insertar(objeto);
	array=arreglo.getArray();
	objToJson={
		datos:array
	};
	json=JSON.stringify(objToJson);
	return json;
}
var guardar = function(req){
	var objToJson=0;
	var array=arreglo.getArray();
	cadena2="";
	console.log(array.length);
	for (var i=0;i<array.length;i++){
		if(array[i]!=null){
			cadena2 += (array[i].getNombre()+","+array[i].getEdad()+","+array[i].getCarrera()+","+array[i].getSemestre()+","+array[i].getNumero()+"\r\n")
	};
	};

	
	
	archivo.escribir(new Buffer(cadena2));
	objToJson={
	};
	json=JSON.stringify(objToJson);
	return json;

}
var mostrar = function(){
	var array = arreglo.getArray();
	objToJson={
		datos:array
	};
	json=JSON.stringify(objToJson);
	return(json);
}

var eliminar = function(num){
	var array = arreglo.getArray();
	console.log(array.length);
	for (var i = 0; i < array.length; i++) {
		if(array[i]!=null){
		if (array[i].getNumero()==num) {
			arreglo.eliminar(i);
		};
	};
	};
	var array2=arreglo.getArray();
	//console.log (array.length);
	//console.log("iniciando creardic");
	return array2;

}
var modificar = function(req){
	var array=0;
	var objToJson=0;
	var nombre="";
	var edad=0;
	var carrera="";
	var semestre="";
	var numero="";
	var objeto = new modelo.alumnos();
	nombre = req.body.nombre;
	edad = req.body.edad;
	carrera = req.body.carrera;
	semestre = req.body.semestre;
	numero = req.body.numero;
	objeto.setNombre(nombre);
	objeto.setEdad(edad);
	objeto.setCarrera(carrera);
	objeto.setSemestre(semestre);
	objeto.setNumero(numero);

	array=arreglo.getArray();
	for(var i =0;i<array.length;i++){
		if (array[i]!=null){
			if(array[i].getNumero()==numero){
				arreglo.modificar(i,objeto);
			}
		}
	}
	var array2=arreglo.getArray();
	return array2;
}
var buscar = function(req){
	var json="";
	var objToJson="";
	var array2=[];
	var array = arreglo.getArray();
	var numero=req.body.numero;
	//console.log(numero);
	for(var i = 0; i<array.length;i++){
		if (array[i]!=null){
			if(array[i].getNumero()==numero){
				array2.push(array[i]);
			};
		};
	};
	objToJson={
		datos:array2
	};
	json=JSON.stringify(objToJson);
	return json;
}
module.exports.leer=leer;
module.exports.modificar=modificar;
module.exports.guardar=guardar;
module.exports.eliminar=eliminar;
module.exports.agregar=agregar;
module.exports.buscar=buscar;
module.exports.mostrar=mostrar;