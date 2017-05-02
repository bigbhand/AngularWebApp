/*Different ways of creating a class example*/

	/*-------1. Cunstructor function---------*/
		
	function Customer(fName, lName, age){
		
		this.fName = fName;
		this.lName = lName;
		this.age = age;
		
		this.getInfo = function(){
			
			return this.fName+" "+this.lName+" : "+this.age; 
		}
	}
	
	//var customer = new Customer("Ganesh","Bhandari",20);
	//document.write(customer.getInfo());
	
	
	/*-------2. Factory Method---------*/
	
	var employee = function(fName, lName, age){
		
		this.fName = fName;
		this.lName = lName;
		this.age = age;
		
		this.getInfo = function(){
			
			return this.fName+" "+this.lName+" : "+this.age;
		}
		
		return this;
	}
	
	//var emp2 = employee2("Ganesh","Bhandari",30);
	//document.write(emp2.getInfo());
	

	/*---------3.Prototype method---------*/
	
	function Person(fName, lName, age){
		
		this.fName = fName;
		this.lName = lName;
		this.age = age;
	}
	
	Person.prototype.getInfo = function(){
		
		return this.fName+" "+this.lName+" : "+this.age;
	}
	
	Person.COMPANY = 'TCS';
	
	Person.ShowCompany = function(){
		
		return Person.COMPANY;
		
		/*or*/
		
		/*return this.COMPANY;*/
	}
	
	var person = new Person("Ganesh", "Bhandari", 40);
	document.write(person.getInfo()+'<br/>');
	document.write(Person.COMPANY+'<br/>');
	document.write(Person.ShowCompany()+'<br/>');

/**Note:
 *     1. If there are 2 function/constructor definition for a same ClassName (Customer) then there will be a 
 *        function-hoisting and the latest definition of the function is accepted
 *     
 *     2. Prototype method applies only for constructor function definitions and NOT for factory method
 *     
 *     3. Advantage of Prototype method over Constructor function is that
 *        if there are 100 objects of Customer then there will be 100 times the method(getInfo()) is loaded to the memory in case if Constructor function method
 *        where as in case of Prototype method only once the method(getInfo()) is loaded to the memory thus by sharing the memory/code
 *        
 *     4. If a property/function is added directly to the Constructor function name then its treated as 'static member'
 *         
 *         Costomer.COMPANY = 'TCS';
 *         
 *         Costomer.ShowCompnay = function(){
 *         		
 *         		return Customer.COMPANY;
 *         }
 *      
 * 
 **/