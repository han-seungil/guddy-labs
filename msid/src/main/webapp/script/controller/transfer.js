(function(){
	var app = angular.module('transfer-module',[]);
	app.controller("TransferController",function($routeParams){
    	$('#amount').maskMoney({prefix:'￦ ', allowNegative: false, thousands:',', decimal:',',precision:0, affixesStay: true});
    	 //
    	
    	//
    });
})();