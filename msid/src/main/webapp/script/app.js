(function(){
    var app = angular.module("msid",["ngRoute","login-module","person-module","transfer-module"]);
    app.config(function($routeProvider){
		$routeProvider
	     .when('/login',{
	        templateUrl : 'view/login.html',
	        controller : 'LoginController'
	    })
	    .when('/transfer',{
	        templateUrl : 'view/transfer.html',
	        controller : 'TransferController'
	    })
	     .when('/transfer/:account/phone/:phoneNumber',{
	        templateUrl : 'view/transfer.html',
	        controller : 'TransferController'
	    })
	    .when('/personal',{
	        templateUrl : 'view/person.html',
	        controller : 'PersonController'
	    })
	    .otherwise({redirectTo:'/login'}
	    		);
	}
	);
    
    app.controller("MainController",function($scope){
    	
    });
   
    
    
})();