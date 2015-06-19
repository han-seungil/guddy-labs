package com.platform.msid.control;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.platform.msid.model.UserInfo;
import com.platform.msid.util.UserStorageTool;


@Controller
public class UserController {

	private static final Logger logger = LoggerFactory
			.getLogger(UserController.class);
	
	@RequestMapping(value = "/login.json", method = RequestMethod.GET)
	public @ResponseBody  UserInfo login(@RequestParam("userId") String userId, @RequestParam("password") String password) {
		logger.info("'/login.json' Requested");
		UserInfo user = UserStorageTool.getInstance().findUserInfo(userId);
		UserInfo objUser=new UserInfo();
		if(null==user){
			user=new UserInfo();
			user.getAccountList().clear();
			user.setMessage("사용자를 찾을 수 없습니다.");
		}
		else{			
			objUser.setId(userId);
			objUser.setPassword("");
			objUser.setName(user.getName());
			objUser.setPhoneNumber(user.getPhoneNumber());
			objUser.setMessage("");
			if(!password.equals(user.getPassword())){
				objUser.setPassword("wrong");
				objUser.setMessage("암호가 틀립니다.");
			}
		}
		return objUser;
	}
}
