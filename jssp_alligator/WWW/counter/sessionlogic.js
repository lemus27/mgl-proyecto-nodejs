(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText("");
	var counter = 1;
	session.get("counter",function(value){
		log.debug("SESSIONLOGIC.JSSP, value - " +value);
		if(value == undefined){
			session.set("counter",1);
		}else{
			counter = value+1;
			session.set("counter",counter);
		}
		request.parameters.counter = counter;
		commands.forward("counter/view.jssp");				
	});				

})