
angular.module('itemManagement')
       .component('itemManagement',{
    	   
    	   templateUrl : 'app/templates/item-management/item-management.template.html',
    	   controller : ['$routeParams','itemService',function ItemDetailsController($routeParams, itemService){
    		   
    		   var self = this;
    		   
    		   this.initialize = function(){
    			   
    			   self.mode = "view";
    			   self.regex="^[\\d]*$";
    			   self.isCreate = false;
    			   self.status ="";
        		   
    			   self.initialItem =  {
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
    			   
    			   self.item = angular.copy(self.initialItem);
    			   
    			   if($routeParams.id != null)
				   {
    				   self.getItemDetails($routeParams.id);
				   }
    			   
    		   }
    		   
    		   this.resetFields = function(){
    			   
    			   if(this.mode.startsWith("create"))
				   {
    				   this.isCreate = true;
    				   this.item = angular.copy(self.initialItem);
    				   this.getNewItemID();
				   }else{
					   this.isCreate = false;
					   this.item = angular.copy(self.initialItem);
					   this.searchKey = "";
				   }
    		   }
    		   
    		   this.checkForEnter = function(event){
    			   
    			   console.log(event);
    			   if(event.keyCode == 13)
				   {
    				   this.getItemDetails(this.searchKey);
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
				
				self.getNewItemID = function(){
					
					itemService.getNewItemID()
							   .then(function success(result){
								   console.log(result);
								   console.log(result.data);
								   self.item.id = result.data;
								   self.status = "";
							   },function failure(error){
								   self.status = "ERROR!";
							   })
				}
    		   
				 this.initialize();
				
    	   }]
    		   
       });


