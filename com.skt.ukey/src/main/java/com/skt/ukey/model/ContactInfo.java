package com.skt.ukey.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Random;

public class ContactInfo  implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Random random;
	public ContactInfo(){
		this.random =  new Random();
		
		 name = "홍길동"+ Integer.toString(this.random.nextInt(10));;
		 customerType = "개인";
		 phoneType = "이동전화";
		 phoneNumber = String.format("010-9%03d-%04d",random.nextInt(999),random.nextInt(9999));
		 sharedService = "";
		 type = "일반";
		 status = "사용중";
		 product = "LTE T끼리맞춤형 "+Integer.toString(random.nextInt(80));
		 monthlyPayment = Integer.toString(random.nextInt(24));
		 additionalService = "T할부지원/약정일";
		 deviceModel = "SH*******";
		 deviceID = "04********";
		 usage = "일반";
		 carrierType = "4G";		
		 usim = "USIM기변";
		 phoneAliasName1 = "갤럭시S3";
		 phoneAliasName2 = "스마트폰";
		 phoneAliasName3 = "LTE";
		 registerDate = "";
		 terminatedDate = "";
		 serviceLevel = "Gold";
		 details=new ArrayList<ContactInfoDetail>();
	}
	ArrayList<ContactInfoDetail> details;
	
	public ArrayList<ContactInfoDetail>getDetails(){
		return details;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCustomerType() {
		return customerType;
	}
	public void setCustomerType(String customerType) {
		this.customerType = customerType;
	}
	public String getPhoneType() {
		return phoneType;
	}
	public void setPhoneType(String phoneType) {
		this.phoneType = phoneType;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getSharedService() {
		return sharedService;
	}
	public void setSharedService(String sharedService) {
		this.sharedService = sharedService;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	public String getMonthlyPayment() {
		return monthlyPayment;
	}
	public void setMonthlyPayment(String monthlyPayment) {
		this.monthlyPayment = monthlyPayment;
	}
	public String getAdditionalService() {
		return additionalService;
	}
	public void setAdditionalService(String additionalService) {
		this.additionalService = additionalService;
	}
	public String getDeviceModel() {
		return deviceModel;
	}
	public void setDeviceModel(String deviceModel) {
		this.deviceModel = deviceModel;
	}
	public String getDeviceID() {
		return deviceID;
	}
	public void setDeviceID(String deviceID) {
		this.deviceID = deviceID;
	}
	public String getUsage() {
		return usage;
	}
	public void setUsage(String usage) {
		this.usage = usage;
	}
	public String getCarrierType() {
		return carrierType;
	}
	public void setCarrierType(String carrierType) {
		this.carrierType = carrierType;
	}
	public String getUsim() {
		return usim;
	}
	public void setUsim(String usim) {
		this.usim = usim;
	}
	public String getPhoneAliasName1() {
		return phoneAliasName1;
	}
	public void setPhoneAliasName1(String phoneAliasName1) {
		this.phoneAliasName1 = phoneAliasName1;
	}
	public String getPhoneAliasName2() {
		return phoneAliasName2;
	}
	public void setPhoneAliasName2(String phoneAliasName2) {
		this.phoneAliasName2 = phoneAliasName2;
	}
	public String getPhoneAliasName3() {
		return phoneAliasName3;
	}
	public void setPhoneAliasName3(String phoneAliasName3) {
		this.phoneAliasName3 = phoneAliasName3;
	}
	public String getRegisterDate() {
		return registerDate;
	}
	public void setRegisterDate(String registerDate) {
		this.registerDate = registerDate;
	}
	public String getTerminatedDate() {
		return terminatedDate;
	}
	public void setTerminatedDate(String terminatedDate) {
		this.terminatedDate = terminatedDate;
	}
	public String getServiceLevel() {
		return serviceLevel;
	}
	public void setServiceLevel(String serviceLevel) {
		this.serviceLevel = serviceLevel;
	}

	String name;
	String customerType;
	String phoneType;
	String phoneNumber;
	String sharedService;
	String type;
	String status;
	String product;
	String monthlyPayment;
	String additionalService;
	String deviceModel;
	String deviceID;
	String usage;
	String carrierType;
	String usim;
	String phoneAliasName1;
	String phoneAliasName2;
	String phoneAliasName3;
	String registerDate;
	String terminatedDate;
	String serviceLevel;

}
