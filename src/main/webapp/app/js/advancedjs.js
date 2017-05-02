/*Closure example*/

	/*Closure is an inner function which has the access to the outer fuction parameters and variables*/

	function addNumbers(firstNumber, secondNumber)
	{
		var result = 'The result is ';
		
		function add(){
			
			return result + (firstNumber + secondNumber);
		}
		
		return add;
	}
	
	document.write(addNumbers(10, 20)());
	
	/*click counter example*/
	
	var clickCounter = function(){
		
		var counter = 0;
		
		return function(){
			return ++counter;
		}
	}(); //self invoking fuction and will be invoked only once

/*different ways of difining function*/
	
	/*1. Named function (supports hoisting)*/
	function addNumbers(n1, n2)
	{
		return n1+n2;
	}
	
	var result = addNumbers(10,20);
	
	/*2. ANonymous function expression (does not supports hoisting)*/
	var add = function(n1, n2)
	{
		return n1+n2;
	}
	
	var result = add(10,20);
	
	/*3. Named function expression (used in recursion & does not support hoisting)*/
	var factorial = function computeFactorial(number)
	{
		if(number<=1)
			return 1;
		
		return number * computeFactorial(number-1);
	}
	
	var result = factorial(5);
	/** var result = computeFactorial(5) gives an undefined error **/
	
	/*4. Self invoking function (does not support hoisting)*/
	var result = function computeFactorial(number)
	{
		if(number<=1)
			return 1;
		
		return number * computeFactorial(number-1);
	}(5);
	
/*Variable scopes*/
	1. var has function scope and supports hoisting
	2. let has block scope and does not support hoisting
	3. const is used to create constant global variables