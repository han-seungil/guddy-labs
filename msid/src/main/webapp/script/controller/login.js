(function() {
	var app = angular.module('login-module', []);
	app.controller("LoginController", [
			'$http','$location',
			function($http,$location) {
				var that = this;
				
				this.submit = function(objUser) {
					var loginPromise = $http.get('login.json', {
						params : objUser
					});
					
					this.msgID = false;
					this.msgPassword = false;
					this.msgOTP=false;
					this.userName="";
					this.phoneNumber="";					
					
					loginPromise
							.success(function(data, status, header, config) {
								if (!data.id) {
									that.msgID = true;
									return;
								}
								if ("wrong"== data.password) {
									that.msgPassword = true;
									return;
								}
								that.userName=data.name;
								that.phoneNumber=data.phoneNumber;
								that.otp="";
								$('#otpSubmit').removeAttr("disabled");
								$("#otpModal").modal();
							});
				};
				
				this.submitOTP = function(otp){
					var otpPromise = $http.get('otp.json?otp='+otp,{
						
					});
					otpPromise.success(function(data,status,header,config){
						if("pass" != data.result){
							that.msgOTP=true;
							return;
							}
						$("#otpModal").modal('hide');
						$location.path("/personal.html");
						$(".modal-backdrop").remove();
					});
					
					
				};
				
				this.init = function(){
					this.user = {};
					this.user.userId = "fintech@sk.com";
					this.user.password="1234qwer";
					this.msgID = false;
					this.msgPassword = false;
					this.btnOTP=true;
					
					
					$("#otpModal").on("show.bs.modal",function(e){
						var ts = (new Date()).getTime() + 5 * 60 * 1000;
						$('#otpSubmit').removeAttr("disabled");
						$('#countdown')
								.countdown(
										{
											timestamp : ts,
											callback : function(left) {
												if(left ==0){
													//$('#otpSubmit').attr("disabled","disabled");
												}
											}
										});
					});
					
				};
			} ]);
})();