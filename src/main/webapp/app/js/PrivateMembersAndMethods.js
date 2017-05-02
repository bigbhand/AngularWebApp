/*Private properties and methods in a Class*/

function Customer(fName, lName, age)
{
	this.fName = fName;
	this.lName = lName;
	var _age = age;
	
	this.getInfo = function(){
		 return this.fName+" "+this.lName+" : "+_age;
	}
	
	//Private function
	var displayFullName = function(){
		return fName+" "+lName;
	}
	
	//Privilaged function
	this.getFullName = function(){
		
		return displayFullName();
	}
	
	Object.defineProperty(this, 'age', {
		
		get : function(){
			return _age;
		},
		set :function(value){
			if(value<1 || value >100)
				 alert('Inavlid age');
			else
				_age = value;
		}
	});
	
}

Customer.prototype.getCustomerName = function(){
	
	return this.getFullName();
}

var customer = new Customer("Ganesh", "Bhandari",50);
customer.age = 90;
document.write(customer.getInfo() + '<br/>');
document.write(customer.getCustomerName() + '<br/>');
document.write(customer.salary + '<br/>');



/**Note:
 *     1. Private properties (defineProperty) are used to add some validations to the field while assigning the value to it
 *     2. If 'set' is removed then the field is read-only
 *     
 *     2. Private methods are accessed using Public method and Privilaged method
 *        Public Method : is the function defined under prototype
 *        Privilaged Method : is the function attached to 'this' keyword of the class
 *        
 *        notice that, while accessing the members of the class from private method, do not use 'this' keyword
 *        
 *          var displayFullName = function(){
				return fName+" "+lName;
			}
 *        
 *     
 * 
 **/