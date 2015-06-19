package com.platform.msid.util;

import java.util.HashMap;

import com.platform.msid.model.UserInfo;

public class UserStorageTool {

	private static UserStorageTool storage=null;
	
	private UserStorageTool(){
		userMap = new HashMap<String , UserInfo>();
		UserInfo user = new UserInfo();
		user.setId("fintech@sk.com");
		user.setName("핀테크");
		user.setPassword("1234qwer");
		user.setPhoneNumber("010-1234-1234");
		userMap.put(user.getId(),user);
	}
	
	public static UserStorageTool getInstance(){
		if(null == storage){
			storage = new UserStorageTool();
		}
		return storage;
	}
	
	private HashMap<String , UserInfo> userMap;

	public HashMap<String , UserInfo> getUserList() {
		return userMap;
	}
	public UserInfo findUserInfo(String id){
		return this.userMap.get(id);
	}
}
