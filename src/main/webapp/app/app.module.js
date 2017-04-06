angular.module('appModule', ['ngRoute',
                             'ngMessages',
                             'ngAnimate',
                             'ngAria',
                             'ngMaterial',
                             'demoService',
                             'filterModule',
                             'webHeader',
                             'webFooter',
                             'itemList',
                             'itemDetails',
                             'itemManagement',
                             'leftNavBar',
                             'comingSoon'])
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
    	                .when('/manage-item/:id',{
    	                	template : "<item-management></item-management>",
    	                })
    	                .when('/about',{
    	                	template : "<coming-soon></coming-soon>",
    	                })
    	                .when('/services',{
    	                	template : "<coming-soon></coming-soon>",
    	                })
    	                .when('/clients',{
    	                	template : "<coming-soon></coming-soon>",
    	                })
    	                .when('/contacts',{
    	                	template : "<coming-soon></coming-soon>",
    	                })
    	                .otherwise({
    	                	redirectTo : '/home'
    	                });
       });



