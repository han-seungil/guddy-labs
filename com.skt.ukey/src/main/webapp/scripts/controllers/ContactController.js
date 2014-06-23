/**
 * 
 */
(function(){
	var app = angular.module('ukey-contact',[]);
	app.controller('ContactController',['$http',function($http){
		var ukey=this;
		ukey.info=[];
		this.search = function(){
			$http.get('/ukey/contactInfo.json').success(function(data){
				ukey.info=[];
				ukey.info = data;
				//console.log(data);
			});
		};
	}]);
})();