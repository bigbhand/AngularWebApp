angular.module('itemList')
	   .component('itemList', {
		  
		   templateUrl: 'app/templates/item-list/item-list.template.html',
		   controller: 
			  ['itemService', function TechLikesController(itemService) {
		                  
				  			var self = this;
				  			self.items = [];
			   				
				  			itemService.getAllItems().success(function(result){
			   					self.items = result;
			   				});
			   				
			   				
			   				var updateSortModels = function(){
			   					this.sortColumn = this.sortByModel.substr(1);
				   				if(this.sortByModel.startsWith("+"))
			   					{
				   					this.reverseSort=false;
			   					}
				   				else
			   					{
				   					this.reverseSort=true;
			   					}
			   				}
			   				
			   				var getClassName = function(column){
			   					
			   					if(this.sortColumn == column){
			   						return this.reverseSort ? 'arrow-down':'arrow-up';
			   					}
			   					return '';
			   				}
			   				
			   				var sortData = function(column){
			   					
			   					this.reverseSort = (this.sortColumn == column)? !this.reverseSort : false;
			   					this.sortColumn = column;
			   				}
			   				
			   				var search = function(item){
			   					
			   					this.items;
			   					if(this.searchText == undefined){
			   						return true; // continue search.. 
			   					}
			   					
			   					if(item.name.toLowerCase().contains(this.searchText.toLowerCase())
			   							||item.model.toLowerCase().contains(this.searchText.toLowerCase()))
		   						{
		   							return true;	
		   						}
			   					
			   					return false;
			   				}
			   				
			   				var changeLayout = function(layout){
			   					
			   					self.layout = layout;
			   				}
			   				
			   				var selectedLayout = function(type){
			   					return self.layout == type?'layout-active':'layout-inactive';
			   				}
			   				
			   				
			   				this.rowLimit = 8;
			   				this.reverseSort = false;
			   				this.sortColumn = 'name';
			   				this.sortByModel = '+name';
			   				this.layout = 'table';
			   				
			   				this.updateSortModels = updateSortModels;
			   				this.sortData = sortData;
			   				this.getClassName = getClassName;
			   				this.changeLayout = changeLayout;
			   				this.selectedLayout = selectedLayout;
			   				
			   				
			   				/*this.search = function(item){
			   					
			   					this.items;
			   					if(this.searchText == undefined){
			   						return true; // continue search.. 
			   					}
			   					
			   					if(item.name.toLowerCase().contains(this.searchText.toLowerCase())
			   							||item.model.toLowerCase().contains(this.searchText.toLowerCase()))
		   						{
		   							return true;	
		   						}
			   					
			   					return false;
			   				};*/
		                }]
		   
	   });