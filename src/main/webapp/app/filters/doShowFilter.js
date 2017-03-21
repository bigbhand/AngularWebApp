/**
 * 
 */
angular.module('filterModule')
       .filter('doShow', function() {
       		return function(doShow){
       			var trueString = "true";
       			
       			if('block'.toUpperCase() === doShow.toUpperCase())
       				return false;
       			if('table'.toUpperCase() === doShow.toUpperCase())
       				return true;
       			if(trueString.toUpperCase() === doShow.toUpperCase())
  				     return true;
       			else 
       				 return false;
       			
       		}
       });