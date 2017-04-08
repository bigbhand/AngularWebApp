
angular.module('itemManagement')
       .component('itemManagement',{
    	   
    	   templateUrl : 'app/templates/item-management/item-management.template.html',
    	   controller : ['$routeParams','itemService','$mdDialog',function ItemDetailsController($routeParams, itemService, $mdDialog){
    		   
    		   var self = this;
    		   
    		   self.initialize = function(){
    			   
    			   self.mode = "view";
    			   self.regex="^[\\d]*$";
    			   self.isCreate = false;
        		   
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
    		   
    		   self.resetFields = function(){
    			   
    			   if(self.mode.startsWith("create"))
				   {
    				   self.isCreate = true;
    				   self.item = angular.copy(self.initialItem);
    				   self.getNewItemID();
				   }else{
					   self.isCreate = false;
					   self.item = angular.copy(self.initialItem);
					   self.searchKey = "";
				   }
    		   }
    		   
    		   self.checkForEnter = function(event){
    			   
    			   console.log(event);
    			   if(event.keyCode == 13)
				   {
    				   self.getItemDetails(self.searchKey);
				   }
    		   }
    		   
               self.getItemDetails = function(searchKey){
            	   
            	   itemService.getItem(searchKey).success(function(item) 
            		{
            		  self.item = item;
            		});
            	   
               }
               
               self.deleteItem = function(searchKey){
            	   
                       $http({
                           method : 'DELETE',
                           url : 'http://localhost:8080/mobiApp/webapi/items/' + searchKey
                       }).then(function(result){
                		  self.item=angular.copy(self.initialItem);
                		  self.showAlert('Success', 'Item with ID '+ searchKey +' has been successfully deleted');
                		}, function(error){
                			self.showAlert('Error', 'Unable to delete the item at this moment, Try again later');
                		});
            	   
               }
               
               self.addItem = function(item){
            	   
            	   itemService.addItem(item).success(function(item) 
            		{
            		  self.showAlert('Success', 'Item with ID '+ item.id +' has been successfully created');
            		  self.item= angular.copy(self.initialItem);
            		});
            	   
               }

				self.updateItem = function(item){
					   
					   itemService.updateItem(item).success(function(item) 
						{
						  self.showAlert('Success', 'Item with ID '+ item.id +' has been successfully updated');
						  self.item = item;
						});
					   
				}
				
				self.getNewItemID = function(){
					
					itemService.getNewItemID()
							   .then(function success(result){
								   console.log(result);
								   console.log(result.data);
								   self.item.id = result.data;
							   },function failure(error){
							   });
				}
    		   
				self.showAlert = function(title, message){
					
					var alert = $mdDialog.alert()
					                     .clickOutsideToClose(true)
					                     .title(title)
					                     .textContent(message)
					                     .ok('OK')
					                     
					$mdDialog.show(alert);
				}
				
				self.initialize();
				
    	   }]
    		   
       });


