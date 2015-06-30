//person controller
(function() {
	var app = angular.module('person-module', []);
	app.controller("PersonController",['$http','$location', function($http,$location) {
		var that = this;
		this.init = function(){
			var accountPromise = $http.get('userInfo.json', {
			});
			accountPromise.success(function(data,status,header,config){
				that.accountList = data.accountList;
				that.phone = data.phoneNumber;
			});
		};
		this.transfer=function(account){
			$location.path("/transfer/"+account.accountNumber+"/phone/"+that.phone);
		}
	}]);
})();