package com.platform.msid.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Random;

import org.springframework.stereotype.Component;

@Component
public class UserInfo implements Serializable {
	private static final long serialVersionUID = -8879061222605561147L;
	
	public UserInfo(){
		this.accontList = new ArrayList<AccountInfo>();
		this.name="init";
		Random random = new Random();
		
		AccountInfo account = new AccountInfo();
		account.setAccountNumber(String.format("%03d-%08d-%03d",random.nextInt(999),random.nextInt(100000000),random.nextInt(999)));
		account.setAliasName("급여");
		account.setBalance(1000000);
		account.setPassword("1234");
		this.getAccountList().add(account);
		account = new AccountInfo();
		account.setAccountNumber(String.format("%03d-%08d-%03d",random.nextInt(999),random.nextInt(100000000),random.nextInt(999)));
		account.setAliasName("재테크");
		account.setBalance(56000000);
		account.setPassword("1234");
		this.getAccountList().add(account);
	}
	
	private String id;	
	private String password;
	private String phoneNumber;
	private String name;
	private String message;
	private ArrayList<AccountInfo> accontList;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public ArrayList<AccountInfo> getAccountList() {
		return accontList;
	}
	public void setMessage(String msg){
		this.message=msg;
	}
	public String getMessage(){
		return this.message;
	}
	public void clear() {
		this.id="";
		this.password="";
		this.name="";
		this.phoneNumber="";
		this.accontList.clear();
		
	}
	
}
