function displayEventInfo(event)
{
	var info = "Event type = "+ event.type
				+"<br/>Coordinate X = "+event.clientX
				+"<br/>Coordinate Y = "+event.clientY
				+"<br/>Target type = "+event.target.type
				+"<br/>Which? = "+detectMouseButton(event.which);
	console.log(event.target);
	document.getElementById("clickInfo").innerHTML = info;
}

function detectMouseButton(code)
{
	switch(code)
	{
		case 1 : return "Left button";
		case 2 : return "Scroll button";
		case 3 : return "Right button";
	}
}

window.onload = function(){
	var btn = document.getElementById("btn");
	btn.addEventListener("mouseup", function(event) {
		
		var info = "Event type = "+ event.type
		+"<br/>Coordinate X = "+event.clientX
		+"<br/>Coordinate Y = "+event.clientY
		+"<br/>Target type = "+event.target.type
		+"<br/>Which? = "+detectMouseButton(event.which);
		console.log(event.target);
		document.getElementById("clickInfo").innerHTML = info;
	
	}, false);
}

window.onerror = function (message, url, line){
	
	alert("There is an unhandled exception!! at lie number "+ line+"\nMessage : "+message+"\nurl : "+url);
	
}

//callAMethod();