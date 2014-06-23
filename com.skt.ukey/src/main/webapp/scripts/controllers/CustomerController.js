/**
 * 
 */
(function(){
	var app = angular.module('ukey-customer',[]);
	app.controller('CustomerController',[ '$http', function($http){
		this.message='this is customer controller';
		var ukey=this;
		ukey.info=[];
		
		
		this.search = function(){
			$http.get('/ukey/customer.json').success(function(data){
				ukey.info=[];
				ukey.info = data;
			});
		};
		
		//Test function
		this.clickTest=function(){
			alert(this.info.contactMain1st);
		};
	}]);
})();