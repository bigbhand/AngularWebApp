/**
 * 
 */

angular.module('itemManagement')
       .component('itemManagement',{
    	   
    	   templateUrl : 'app/templates/item-management/item-management.template.html',
    	   controller : ['itemService',function ItemDetailsController(itemService){
    		 
    		   var initialItem = {
    				   category: "",
    				   color: "",
    				   descr: "",
    				   discount: undefined,
    				   id : undefined,
    				   name: "",
    				   price: undefined,
    				   rating: undefined,
    				   seller: "",
    				   snippet: "",
    				   stocks: undefined
    		   };
    		   var status ="";

    		   this.initialItem = initialItem;
    		   this.item = angular.copy(initialItem);
    		   this.status = status;
    		   this.mode = "view";
    		   this.regex="^[\\d]*$";
    		   this.isCreate = false;
    		   
    		   var self = this;
    		   
    		   this.resetFields = function(){
    			   
    			   if(this.mode.startsWith("create"))
				   {
    				   this.isCreate = true;
    				   this.item = angular.copy(initialItem);
				   }else{
					   this.isCreate = false;
					   this.item = angular.copy(initialItem);
					   this.searchKey = "";
				   }
    		   }
    		   
               self.getItemDetails = function(searchKey){
            	   
            	   itemService.getItem(searchKey).success(function(item) 
            		{
            		  self.status = "success";
            		  self.item = item;
            		});
            	   
               }
               
               self.deleteItem = function(searchKey){
            	   
            	  /* itemService.deleteItem(searchKey).then(function(result){
            		  self.status = status;
            		  self.item=angular.copy(self.initialItem);
            		}, function(error){
            			 self.status = "ERROR!!";
            		});*/
            	   
                       $http({
                           method : 'DELETE',
                           url : 'http://localhost:8080/mobiApp/webapi/items/' + searchKey
                       }).then(function(result){
                 		  self.status = status;
                		  self.item=angular.copy(self.initialItem);
                		}, function(error){
                			 self.status = "ERROR!!";
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

