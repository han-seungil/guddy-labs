var mobileKeyWords = new Array('iPhone','iPod','iPad','BlackBerry','Android','Windows Phone','LG','MOT','SAMSUNG','SonyEricsson');

function detectBrowser( callMobile, callBrowser ){
	var agentInfo = navigator.userAgent;
	for(var keyword in mobileKeyWords){
		if(agentInfo.match(mobileKeyWords[keyword]) != null){
			callMobile();
			return;
		}
	}
	callBrowser();
}