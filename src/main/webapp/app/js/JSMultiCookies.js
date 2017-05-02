function setCookies(){
	
	if(method == "JSON"){
		
		var customObject = {};
		
		customObject.name = document.getElementById("name").value;
		customObject.email = document.getElementById("email").value;
		customObject.gender = document.getElementById("gender").value;
				
		var cookie = JSON.stringify(customObject);
		
		document.cookie = "cookieObject="+cookie;
		
		console.log("JSON Cookie : "+document.cookie);
	}else{
		
		document.cookie = "name="+document.getElementById("name").value;
		document.cookie = "email="+document.getElementById("email").value;
		document.cookie = "gender="+document.getElementById("gender").value;
		
		console.log("Multi Cookie : "+document.cookie);
	}
}

function getCookies(){
	
	console.log(document.cookie);
	
	if(document.cookie.length!=0)
	{
		if(method == "JSON"){
			 var cookieObjectString = document.cookie.split("=")[1];
			 console.log(cookieObjectString);
			 var cookieObject = JSON.parse(cookieObjectString);
			 console.log(cookieObject);
			 
			 document.getElementById("name").value = cookieObject.name;
			 document.getElementById("email").value = cookieObject.email;
			 document.getElementById("gender").value = cookieObject.gender;
			
		}else{
			var cookies = document.cookie.split("; ");
			
			cookies.forEach(function(cookie, i, array) {
				document.getElementById(cookie.split("=")[0]).value = cookie.split("=")[1];
			});
		}
	}
	else
	{
		 document.getElementById("name").value = "";
		 document.getElementById("email").value = "";
		 document.getElementById("gender").value = "";
	}
	
}

function clearCookies(){
	
	var cookies = document.cookie.split("; ");
	console.log(document.cookie);
	console.log("Cookie Array : "+cookies);
	
	cookies.forEach(function(cookie, i, array) {
		
		var name = cookie.split("=")[0];
		document.cookie = name+"=;max-age=-1";
	});
	
	console.log("Congratulations! Cookies are cleared")
	
}

function updateGenderCookie(){
	
	var cookies = document.cookie.split("; ");
	console.log("Cookie Array : "+cookies);
	
	cookies.forEach(function(cookie, i, array) {
		
		var name = cookie.split("=")[0];
		if(name == "gender")
		{
			document.cookie = name +"="+ document.getElementById("gender").value;
		}
	});
	
	console.log(document.cookie);
}

window.onload = function(){
	
	//method = "JSON";
	
	method = "";
	
	getCookies();
}