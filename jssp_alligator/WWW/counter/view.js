<<<<<<< HEAD
(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText("%3CHTML%3E%0D%0A");
commands.writeEscapedText("%09%3CHEAD%3E%3CTITLE%3EApplication%20Scope%20Counter%20Tester%3C/TITLE%3E%3C/HEAD%3E%0D%0A");
commands.writeEscapedText("%09%3CBODY%3E%0D%0A");
=======
(function(log,lib,application,request,responseHead,commands,session) {commands.writeEscapedText("%3CHTML%3E%0A");
commands.writeEscapedText("%09%3CHEAD%3E%3CTITLE%3EApplication%20Scope%20Counter%20Tester%3C/TITLE%3E%3C/HEAD%3E%0A");
commands.writeEscapedText("%09%3CBODY%3E%0A");
>>>>>>> 43ec18bbb8cae71fc70a390ed2a0babe5043da5d
commands.writeEscapedText("%09");
		var counter = request.parameters.counter;
		if(counter==1)
			commands.write("First Time");
		else
			commands.write("Number of users:" + counter);
			
<<<<<<< HEAD
	commands.writeEscapedText("%0D%0A");
commands.writeEscapedText("%09%3C/BODY%3E%0D%0A");
=======
	
commands.writeEscapedText("%09%3C/BODY%3E%0A");
>>>>>>> 43ec18bbb8cae71fc70a390ed2a0babe5043da5d
commands.writeEscapedText("%3C/HTML%3E%0A");
})