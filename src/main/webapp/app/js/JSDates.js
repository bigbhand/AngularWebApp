window.onload = function(){

//var date = new Date();


var customDate = new Date(1991,10,25,23,59,59,0);

document.getElementById("today").innerHTML = customDate;
document.getElementById("dateInfo").innerHTML = "Year = "+ customDate.getFullYear()+" or "+customDate.getYear()+"<br/>"
                                                +"Month = "+ customDate.getMonth()+" or "+convertToMonth(customDate.getMonth())+"<br/>"
                                                +"Date = "+ customDate.getDate()+"<br/>"
                                                +"Weekday = "+customDate.getDay()+" or "+convertToWeek(customDate.getDay())+"<br/>"
                                                +"Hours = "+customDate.getHours()+"<br/>"
                                                +"Minutes = "+customDate.getMinutes()+"<br/>"
                                                +"Seconds = "+customDate.getSeconds()+"<br/>"
                                                +"Milliseconds = "+customDate.getMilliseconds();

//setTimeout : executes the function every specified time
setInterval(function() {
	
	document.getElementById("now").innerHTML = new Date();
	
}, 1000);


//setTimeout : executes the function after specified timeout
/*setTimeout(function() {
	
	document.getElementById("now").innerHTML = new Date();
	
}, 10000);*/

}

function convertToMonth(code){
	
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	
	return months[code];
}

function convertToWeek(code){
	
	var weeks = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
	
	return weeks[code];
}




/**Note: 1. There are 2 ways to create a custom date
 *           i. new Date(string)
 *              - string should be either of following format
 *              - Nov 25 1991 or Nov/25/1991  
 *              - 25 Nov 1991 or 25/Nov/1991
 *              - 1991 Nov 25 or 1991/Nov/25
 *              
 *              - 11 25 1991 or 11/25/1991
 *              - 1991 11 25 or 1991/11/25
 * 
 *           ii. new Date(year,month,date,hr,min,sec,msec)
 *               - here month is 0-11
 *               - 1991,10,25,23,59,59,0
 *               - 1991,10,25,23,59,59
 *               - 1991,10,25,23,59
 *               - 1991,10,25,23
 *               - 1991,10,25
 *               - 1991,10   - 1st day of month
 *               - 1991      - 1st day of year 1970
 * 
 ***/