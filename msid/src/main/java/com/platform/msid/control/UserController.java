package com.platform.msid.control;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.platform.msid.model.UserInfo;
import com.platform.msid.util.UserStorageTool;

@Controller
@SessionAttributes("user")
public class UserController {

	private static final Logger logger = LoggerFactory
			.getLogger(UserController.class);
//	@Autowired
//	private UserInfo m_UserInfo;

	@ModelAttribute("user")
	public UserInfo getInitUserInfo() {
		return new UserInfo();
	}

	@RequestMapping(value = "/login.json", method = RequestMethod.GET)
	public @ResponseBody UserInfo login(@RequestParam("userId") String userId,
			@RequestParam("password") String password,
			@ModelAttribute("user") UserInfo userInfo) {
		logger.info("'/login.json' Requested");

		UserInfo user = UserStorageTool.getInstance().findUserInfo(userId);
		if (null == user) {
			userInfo.clear();
			userInfo.setMessage("사용자를 찾을 수 없습니다.");
		} else {
			userInfo.setId(userId);
			userInfo.setPassword("");
			userInfo.setName(user.getName());
			userInfo.setPhoneNumber(user.getPhoneNumber());
			userInfo.setMessage("");
			if (!password.equals(user.getPassword())) {
				userInfo.setPassword("wrong");
				userInfo.setMessage("암호가 틀립니다.");
			}
		}
		return userInfo;
	}

	@RequestMapping(value = "/userInfo.json", method = RequestMethod.GET)
	public @ResponseBody UserInfo getUserInfo(
			@ModelAttribute("user") UserInfo userInfo) {

		return userInfo;
	}
}
