function changeImage(event){
	
	event = event || window.event;
	var mainImage = document.getElementById("mainImage");
	
	console.log(event.target);
	if(event.target.tagName == "IMG")
	{
		mainImage.src = event.target.src;
	}
	
}

var images = document.getElementById("div").getElementsByTagName("img");

for(var i=0;i<images.length;i++)
{
	images[i].onmouseover = function(){
		
		this.style.borderColor = "red";
		this.style.cursor = "hand";
		this.style.boxShadow = "0px 0px 8px red";
	}
	
	images[i].onmouseout = function(){
		
		this.style.borderColor = "grey";
		this.style.cursor = "pointer";
		this.style.boxShadow = "none";
	}
}