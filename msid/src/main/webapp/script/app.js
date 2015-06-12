(function(){
    var app = angular.module("msid",["ngRoute"]);
    app.config(function($routeProvider){
		$routeProvider
	    .when('/login.html',{
	        templateUrl : 'view/login.html',
	        controller : 'LoginController'
	    })
	    .when('/transfer.html',{
	        templateUrl : 'view/transfer.html',
	        controller : 'transferController'
	    })
	    .when('/personal.html',{
	        templateUrl : 'view/personal.html',
	        controller : 'PersonalController'
	    });
	}
	);
    
    app.controller("MainController",function($scope){
    	
    });
    app.controller("LoginController", function($scope){
    	
    });
    app.controller("PersonalController",function($scope){
    	
    });
    app.controller("TransferController",function($scope){
    	
    });
})();