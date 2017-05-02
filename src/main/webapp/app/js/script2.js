var MobiApp = MobiApp || {};
MobiApp.Script2 = MobiApp.Script2 || {};

MobiApp.Script2.person = function(fName, lName)
{
	this.fName = fName;
	this.lName = lName;
	
	this.getName = function(){
		return this.fName+" "+this.lName+" from script2";
	}
	
	return this;
};