var classMaterias=function ()
{
	this.clave="eliminado";
	this.nombre="eliminado";
	this.turno="eliminado";
	this.creditos=0;
	this.maestro="eliminado";
}	
	classMaterias.prototype.setClave = function(clave)
	{
		this.clave=clave;
	};
	
	classMaterias.prototype.setNombre = function(nombre)
	{
		this.nombre=nombre;
	};
	classMaterias.prototype.setTurno = function(turno)
	{
		this.turno=turno;	
	}
	classMaterias.prototype.setCreditos = function(creditos)
	{
		this.creditos=creditos;
	}
	classMaterias.prototype.setMaestro = function(maestro)
	{
		this.maestro=maestro;
	}

/////////////////////////////////////////
classMaterias.prototype.getClave = function()
{
	return this.clave;
};

classMaterias.prototype.getNombre = function()
{
	return this.nombre;
}

classMaterias.prototype.getTurno= function()
{
	return this.turno;
}

classMaterias.prototype.getCreditos = function()
{
	return this.creditos;
}
classMaterias.prototype.setMaestro = function(maestro)
{
	this.maestro=maestro;
}
classMaterias.prototype.getMaestro = function()
{
	return this.maestro;
}


module.exports=classMaterias;
