(function(){
    var app = angular.module("msid",["ngRoute","login-module","person-module","transfer-module"]);
    app.config(function($routeProvider){
		$routeProvider
	     .when('/login.html',{
	        templateUrl : 'view/login.html',
	        controller : 'LoginController'
	    })
	    .when('/transfer.html',{
	        templateUrl : 'view/transfer.html',
	        controller : 'TransferController'
	    })
	    .when('/personal.html',{
	        templateUrl : 'view/person.html',
	        controller : 'PersonController'
	    })
	    .otherwise({redirectTo:'/login.html'}
	    		);
	}
	);
    
    app.controller("MainController",function($scope){
    	
    });
   
    
    
})();