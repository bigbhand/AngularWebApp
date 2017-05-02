window.onload = function(){
	
	document.getElementById('start').onclick = startSlideShow;
	document.getElementById('stop').onclick = stopSlideShow;
	
}

var interval;

function startSlideShow(){
	
	var slide = document.getElementById('slide');
	var index=1;
	interval = setInterval(function() {
		
		slide.src = "../images/slideshow/"+(index++)+".jpg";
		
		if(index>=9){
			index = 1;
		}
	}, 1000);
	
}

function stopSlideShow(){
	
	window.clearInterval(interval);
	
}