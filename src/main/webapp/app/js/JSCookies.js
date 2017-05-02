function updateColorCookie(){
	
	var color = document.getElementById("colorCombo").value;
	if(color != 0)
	{
		document.body.style.backgroundColor = color;
		document.cookie = "color="+color+";";
		
	}
}

window.onload = function(){
	
	if(document.cookie.length != 0)
	{
		console.log(document.cookie);
		var colorCookie = document.cookie.split("=");
		document.body.style.backgroundColor = colorCookie[1];
		document.getElementById("colorCombo").value = colorCookie[1];
	}
};


/**Note:
 *       1. Multiple cookies are separated by '; '
 *       2. Each cookie key-value pair is in the format key=value
 * 
 *       3. Store Multiple Cookies?
 *          method 1 : using JSON object and JSON.stringify()
 *          
 *          method 2 : use different cookie for each key-value pair
 *          
 *       4. To check if the cookies enabled 
 *          navigator.cookieEnabled; 
 *                             
 * 
 */**/