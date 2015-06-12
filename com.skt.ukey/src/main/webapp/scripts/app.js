(function(){
	var app = angular.module('ukeyApp',['ngRoute','ukey-customer','ukey-contact']);
	app.config(function($routeProvider){
		$routeProvider
	    .when('/customer.html',{
	        templateUrl : 'views/customer.html',
	        controller : 'CustomerController'
	    })
	    .when('/contact.html',{
	        templateUrl : 'views/contact.html',
	        controller : 'ContactController'
	    });
	}
	);
	app.controller('MainController',['$location',function($location){
	    this.menu='customer.html';
	    
	    this.isSelected=function(checkMenu){
	    	var currentRoute = $location.path().substring(1)||'customer.html';
	    	console.log(currentRoute?'active':'');
	    	return checkMenu === currentRoute?'active':'';
	    };
	    this.selectMenu = function(selectMenu){
	    	this.menu=selectMenu;
	    };
	}]);
	
})();