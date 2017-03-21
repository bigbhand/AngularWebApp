/**
 * 
 */

angular.module('itemManagement')
       .component('itemManagement',{
    	   
    	   templateUrl : 'app/templates/item-management/item-management.template.html',
    	   controller : ['itemService',function ItemDetailsController(itemService){
    		 
    		   var item = {};
    		   var status ="";
    		   var mode = "true";

    		   this.item = item;
    		   this.status = status;
    		   this.mode = mode;
    		   this.regex="^[\\d]*$"
    		   
    		   var self = this;
    		   
               self.getItemDetails = function(searchKey){
            	   
            	   itemService.getItem(searchKey).success(function(item) 
            		{
            		  self.status = "success";
            		  self.item = item;
            		});
            	   
               }
               
               self.deleteItem = function(searchKey){
            	   
            	   itemService.deleteItem(searchKey).success(function(status) 
            		{
            		  self.status = "deleted!";
            		  self.item={};
            		});
            	   
               }
               
               self.addItem = function(item){
            	   
            	   itemService.addItem(item).success(function(item) 
            		{
            		  self.status = "Added!";
            		  self.item={};
            		});
            	   
               }

				self.updateItem = function(item){
					   
					   itemService.updateItem(item).success(function(item) 
						{
						  self.status = "Updated!";
						  self.item = item;
						});
					   
				}
    		   
    	   }]
    		   
       });

