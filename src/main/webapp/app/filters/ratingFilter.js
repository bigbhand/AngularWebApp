/**
 * 
 */

angular.module('filterModule')
       .filter('ratingFilter', function() {
       		return function(rating){
       			
       			switch(rating)
       			{
       				case 1: return '\u2605\u2606\u2606\u2606\u2606';
       				case 2: return '\u2605\u2605\u2606\u2606\u2606';
       				case 3: return '\u2605\u2605\u2605\u2606\u2606';
       				case 4: return '\u2605\u2605\u2605\u2605\u2606';
       				case 5: return '\u2605\u2605\u2605\u2605\u2605';
       				default: return '';
       			}
       		}
       });