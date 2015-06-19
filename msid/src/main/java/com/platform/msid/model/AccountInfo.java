package com.platform.msid.model;

import java.io.Serializable;

public class AccountInfo implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String accountNumber;
	
	private String aliasName;
	private int balance;
	private String password;
	
	public String getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}
	public String getAliasName() {
		return aliasName;
	}
	public void setAliasName(String aliasName) {
		this.aliasName = aliasName;
	}
	public int getBalance() {
		return balance;
	}
	public void setBalance(int balance) {
		this.balance = balance;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
