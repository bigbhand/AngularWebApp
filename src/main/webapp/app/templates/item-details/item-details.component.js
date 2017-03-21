/**
 * 
 */

angular.module('itemDetails')
       .component('itemDetails',{
    	   
    	   templateUrl : 'app/templates/item-details/item-details.template.html',
    	   controller : ['$routeParams','itemService',function ItemDetailsController($routeParams, itemService){
    		 
    		   	 var self = this;
    		  
	    		 itemService.getItem($routeParams.id).success(function(item){
	    			 
	    			 self.item = item;
	    		 });
    		   
    	   }]
    		   
       });

