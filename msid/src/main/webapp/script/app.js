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
	        controller : 'TransferController'
	    })
	    .when('/personal.html',{
	        templateUrl : 'view/personal.html',
	        controller : 'PersonalController'
	    })
	    .otherwise({redirectTo:'/login.html'}
	    		);
	}
	);
    
    app.controller("MainController",function($scope){
    	
    });
    app.controller("LoginController", function($scope){
    	
    });
    app.controller("PersonalController",function($scope){
    	
    });
    app.controller("TransferController",function($scope){
    	$('#amount').maskMoney({prefix:'￦ ', allowNegative: false, thousands:',', decimal:',',precision:0, affixesStay: true});
    	 $('#timer').pietimer({
             timerSeconds: 300,
             color: '#234',
             fill: false,
             showPercentage: true,
             callback: function() {
                 alert("yahoo, timer is done!");
                 $('#timer').pietimer('reset');
             }
         });
    });
})();