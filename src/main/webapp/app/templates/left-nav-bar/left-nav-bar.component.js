'use strict';

angular.module('leftNavBar')
       .component('leftNavBar',{
    	   
    	   templateUrl : 'app/templates/left-nav-bar/left-nav-bar.template.html',
       	   controller  : function LeftNavBarController(){
       		   
       		   this.closeNavBar = function(){
       			   
       			   document.getElementById("mySidenav").style.width = "0";
       		   }
       		   
       		   this.openNav = function openNav() {
       			   
       			   document.getElementById("mySidenav").style.width = "250px";
       		   }
   		
       	   }
       })