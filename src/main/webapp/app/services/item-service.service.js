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
	        }
	   
	   }
});