'use strict';
var MobiApp = MobiApp || {};
MobiApp.Script1 = MobiApp.Script1 || {};

MobiApp.Script1.person = function(fName, lName)
{
	this.fName = fName;
	this.lName = lName;
	
	this.getName = function(){
		return this.fName+" "+this.lName+" from script1";
	}
	
	return this;
};