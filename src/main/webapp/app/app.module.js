angular.module('appModule', ['ngRoute','ngMessages','demoService','filterModule','webHeader','webFooter','itemList','itemDetails','itemManagement'])
       .config(function($routeProvider){
    	   
    	   $routeProvider
    	                .when('/home',{
    	                	template : "<item-list></item-list>",
    	                })
    	                .when('/items/:id',{
    	                	template : "<item-details></item-details>",
    	                })
    	                .when('/manage-item',{
    	                	template : "<item-management></item-management>",
    	                })
    	                .otherwise({
    	                	redirectTo : '/home'
    	                });
       });



