package com.skt.ukey.model;

import java.io.Serializable;
import java.util.Random;

public class Customer implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -8879061222605561147L;

	public Customer(){
		this.random =  new Random();
		if(this.random.nextBoolean()){
					changeType="신규";
		}else{
			changeType="기변";
		}
		
		name="홍길동"+ Integer.toString(this.random.nextInt(10));
		if(this.random.nextBoolean()){
			realName="Y";
		}else{
			realName="N";
		}
		contactMain1st="010";
		contactMain2nd=Integer.toString(random.nextInt(99999999));
		
		contactSub1st="010";
		contactSub2nd=Integer.toString(random.nextInt(99999999));
		
		customerType1st="개인";
		customerType2nd="일반";
		
		occupation1st="회사원";
		occupation2nd="기술직";
		
		zipCode = Integer.toString(random.nextInt(999))+"-"+Integer.toString(random.nextInt(999));
		
		if(this.random.nextBoolean()){
			address = "서울 특별시";
		}else{
			address = "부산 직할시";
		}
		addressDetail = Integer.toString(random.nextInt(999))+ " 번지";
		
		benifit = "A";
		nationalCareNo="없음";
		specialLicense=Integer.toString(random.nextInt(200))+"-"+Integer.toString(random.nextInt(9999));
		residenceType="내국인";
		
		birthday=String.format("1990-%02d-%02d",random.nextInt(12), random.nextInt(30));
		hobby1st="오페라";
		hobby2nd="음악감상";
		hobby3rd="골프";
		
		weddingAnniversary=String.format("2000-%02d-%02d",random.nextInt(12), random.nextInt(30));
		memberCondition="N/A";
		channelA="A채널";
		channelB="B채널";
		workingPlace="SK";
		officePhone1st="02";
		officePhone2nd=Integer.toString(random.nextInt(99999999));
		officeZipCode=Integer.toString(random.nextInt(999))+"-"+Integer.toString(random.nextInt(999));
		if(this.random.nextBoolean()){
			officeAddress = "서울 특별시";
		}else{
			officeAddress = "부산 직할시";
		}
		officeAddressDetail="T-Tower " + Integer.toString(random.nextInt(999))+ " 번지";
		
		
	}
	
	private Random random;
	
	String changeType;
	String name;
	String realName;
	String contactMain1st;
	String contactMain2nd;
	String contactSub1st;
	String contactSub2nd;
	String customerType1st;
	String customerType2nd;
	String occupation1st;
	String occupation2nd;
	String zipCode;
	String address;
	String addressDetail;
	String benifit;
	String nationalCareNo;
	String specialLicense;
	String residenceType;
	
	String birthday;
	String hobby1st;
	String hobby2nd;
	String hobby3rd;
	String weddingAnniversary;
	String memberCondition;
	String channelA;
	String channelB;
	String workingPlace;
	String officePhone1st;
	String officePhone2nd;
	String officeZipCode;
	String officeAddress;
	String officeAddressDetail;
	
	public String getChangeType() {
		
		return changeType;
	}
	public void setChangeType(String changeType) {
		
		this.changeType = changeType;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRealName() {
		return realName;
	}
	public void setRealName(String realName) {
		this.realName = realName;
	}
	public String getContactMain1st() {
		return contactMain1st;
	}
	public void setContactMain1st(String contactMain1st) {
		this.contactMain1st = contactMain1st;
	}
	public String getContactMain2nd() {
		return contactMain2nd;
	}
	public void setContactMain2nd(String contactMain2nd) {
		this.contactMain2nd = contactMain2nd;
	}
	public String getContactSub1st() {
		return contactSub1st;
	}
	public void setContactSub1st(String contactSub1st) {
		this.contactSub1st = contactSub1st;
	}
	public String getContactSub2nd() {
		return contactSub2nd;
	}
	public void setContactSub2nd(String contactSub2nd) {
		this.contactSub2nd = contactSub2nd;
	}
	public String getCustomerType1st() {
		return customerType1st;
	}
	public void setCustomerType1st(String customerType1st) {
		this.customerType1st = customerType1st;
	}
	public String getCustomerType2nd() {
		return customerType2nd;
	}
	public void setCustomerType2nd(String customerType2nd) {
		this.customerType2nd = customerType2nd;
	}
	public String getOccupation1st() {
		return occupation1st;
	}
	public void setOccupation1st(String occupation1st) {
		this.occupation1st = occupation1st;
	}
	public String getOccupation2nd() {
		return occupation2nd;
	}
	public void setOccupation2nd(String occupation2nd) {
		this.occupation2nd = occupation2nd;
	}
	public String getZipCode() {
		return zipCode;
	}
	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getAddressDetail() {
		return addressDetail;
	}
	public void setAddressDetail(String addressDetail) {
		this.addressDetail = addressDetail;
	}
	public String getBenifit() {
		return benifit;
	}
	public void setBenifit(String benifit) {
		this.benifit = benifit;
	}
	public String getNationalCareNo() {
		return nationalCareNo;
	}
	public void setNationalCardNo(String nationalCareNo) {
		this.nationalCareNo = nationalCareNo;
	}
	public String getSpecialLicense() {
		return specialLicense;
	}
	public void setSpecialLicense(String specialLicense) {
		this.specialLicense = specialLicense;
	}
	public String getResidenceType() {
		return residenceType;
	}
	public void setResidenceType(String residenceType) {
		this.residenceType = residenceType;
	}
	public String getBirthday() {
		return birthday;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	public String getHobby1st() {
		return hobby1st;
	}
	public void setHobby1st(String hobby1st) {
		this.hobby1st = hobby1st;
	}
	public String getHobby2nd() {
		return hobby2nd;
	}
	public void setHobby2nd(String hobby2nd) {
		this.hobby2nd = hobby2nd;
	}
	public String getHobby3rd() {
		return hobby3rd;
	}
	public void setHobby3rd(String hobby3rd) {
		this.hobby3rd = hobby3rd;
	}
	public String getWeddingAnniversary() {
		return weddingAnniversary;
	}
	public void setWeddingAnniversary(String weddingAnniversary) {
		this.weddingAnniversary = weddingAnniversary;
	}
	public String getMemberCondition() {
		return memberCondition;
	}
	public void setMemberCondition(String memberCondition) {
		this.memberCondition = memberCondition;
	}
	public String getChannelA() {
		return channelA;
	}
	public void setChannelA(String channelA) {
		this.channelA = channelA;
	}
	public String getChannelB() {
		return channelB;
	}
	public void setChannelB(String channelB) {
		this.channelB = channelB;
	}
	public String getWorkingPlace() {
		return workingPlace;
	}
	public void setWorkingPlace(String workingPlace) {
		this.workingPlace = workingPlace;
	}
	public String getOfficePhone1st() {
		return officePhone1st;
	}
	public void setOfficePhone1st(String officePhone1st) {
		this.officePhone1st = officePhone1st;
	}
	public String getOfficePhone2nd() {
		return officePhone2nd;
	}
	public void setOfficePhone2nd(String officePhone2nd) {
		this.officePhone2nd = officePhone2nd;
	}
	public String getOfficeZipCode() {
		return officeZipCode;
	}
	public void setOfficeZipCode(String officeZipCode) {
		this.officeZipCode = officeZipCode;
	}
	public String getOfficeAddress() {
		return officeAddress;
	}
	public void setOfficeAddress(String officeAddress) {
		this.officeAddress = officeAddress;
	}
	public String getOfficeAddressDetail() {
		return officeAddressDetail;
	}
	public void setOfficeAddressDetail(String officeAddressDetail) {
		this.officeAddressDetail = officeAddressDetail;
	}
	
}
