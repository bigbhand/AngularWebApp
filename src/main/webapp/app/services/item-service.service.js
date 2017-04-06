/**
 * 
 */
angular.module('demoService')
	   .factory('itemService', function($http) {
		   
		   return {
			   getAllItems: function() {
			       var url = "http://localhost:8080/mobiApp/webapi/items";
			       return $http.get(url);
			   },
			   getItem: function(id) {
			       var url = "http://localhost:8080/mobiApp/webapi/items/"+id;
			       return $http.get(url);
			   },
			   addItem: function(item) {
			       var url = "http://localhost:8080/mobiApp/webapi/items";
			       return $http.post(url,item);
			   },
			   updateItem: function(item) {
			       var url = "http://localhost:8080/mobiApp/webapi/items/"+item.id;
			       return $http.put(url,item);
			   },
			   deleteItem: function(id) {
				   
			       var url = "http://localhost:8080/mobiApp/webapi/items/"+id;
			       return $http.delete(url);
			       
			       /*return $http({
			    	    method: 'DELETE',
			    	    url: "http://localhost:8080/mobiApp/webapi/items/"+id,
			    	})
			    	.then(function(response) {
			    	    console.log(response.data);
			    	}, function(rejection) {
			    	    console.log(rejection.data);
			    	});*/
			   },
			   getNewItemID: function(){
				   
				   var url = "http://localhost:8080/mobiApp/webapi/items/newID";
			   	   return $http.get(url);
			   }
			   
		   }
	   
		  /* var itemService = {};
	   
		   itemService.getAllItems  = function(){
			   
			   var url = "http://localhost:8080/mobiApp/webapi/items";
			   return $http.get(url);
		   } 
		   
		   itemService.getItem  = function(){
			   
			   var url = "http://localhost:8080/mobiApp/webapi/items/"+id;
			   return $http.get(url);
		   } 
		   
		   itemService.addItem  = function(){
			   
			   var url = "http://localhost:8080/mobiApp/webapi/items";
			   return $http.post(url,item);
		   } 
		   
		   itemService.updateItem  = function(){
			   
			   var url = "http://localhost:8080/mobiApp/webapi/items/"+item.id;
			   return $http.put(url,item);
		   } 
		   
		   itemService.deleteItem  = function(){
			   
			   var url = "http://localhost:8080/mobiApp/webapi/items/"+id;
			   return $http.delete(url);
		   } 
	        
		   return itemService;*/
	   
});

/* return {
getAllItems: function() {
    var url = "http://localhost:8080/mobiApp/webapi/items";
    return $http.get(url);
},
getItem: function(id) {
    var url = "http://localhost:8080/mobiApp/webapi/items/"+id;
    return $http.get(url);
},
addItem: function(item) {
    var url = "http://localhost:8080/mobiApp/webapi/items";
    return $http.post(url,item);
},
updateItem: function(item) {
    var url = "http://localhost:8080/mobiApp/webapi/items/"+item.id;
    return $http.put(url,item);
},
deleteItem: function(id) {
    var url = "http://localhost:8080/mobiApp/webapi/items/"+id;
    return $http.delete(url);
}*/