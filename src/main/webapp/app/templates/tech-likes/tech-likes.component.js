angular.module('techLikes')
	   .component('techLikes', {
		  
		   templateUrl: 'app/tech-likes/tech-likes.template.html',
		   controller:  function TechLikesController() {
		                  
			   				var techs = [
			   						{name : 'C', likes : 0, dislikes:0},
			   						{name : 'Java', likes : 0, dislikes:0},
			   						{name : 'GWT', likes : 0, dislikes:0},
			   						{name : 'ASP.NET', likes : 0, dislikes:0},
			   						{name : 'AngularJS', likes : 0, dislikes:0},
			   						{name : 'Android', likes : 0, dislikes:0}
			   				];
			   				
			   				var incrementLikes = function (technology){
			   					technology.likes++;
			   				}
			   				
			   				var incrementDislikes = function (technology){
			   					technology.dislikes++;
			   				}
		                  
			   				this.techs = techs;
			   				this.incrementLikes = incrementLikes;
			   				this.incrementDislikes = incrementDislikes;
		                }
		   
	   });