//transfer controller
(function(){
	var app = angular.module('transfer-module',[]);
	app.controller("TransferController",['$http', '$routeParams', function($http, $routeParams){
    	//$('#amount').maskMoney({prefix:'￦ ', allowNegative: false, thousands:',', decimal:',',precision:0, affixesStay: true});
    	 //
    	var params = $routeParams;
    	//this.sourceAccount = params.account;
    	var that = this;
    	
    	this.init = function(){
    		var accountPromise = $http.get('userInfo.json', {
			});
			accountPromise.success(function(data,status,header,config){
				that.accountList = data.accountList;
				that.phoneNumber = data.phoneNumber;
				that.targetBank="행복은행";
				that.amount=0;
				for(i in that.accountList){
					if(params.account === that.accountList[i].accountNumber){
						that.sourceAccount=that.accountList[i];
					}
				}
			});
    	};
    	//
    }]);
})();