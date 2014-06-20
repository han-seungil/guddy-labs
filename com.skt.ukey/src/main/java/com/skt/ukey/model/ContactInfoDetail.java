package com.skt.ukey.model;

import java.io.Serializable;
import java.util.Random;

public class ContactInfoDetail  implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ContactInfoDetail(){
		this.random =  new Random();
		date=String.format("2000-%02d-%02d",random.nextInt(12), random.nextInt(30));
		serviceType="서비스";
		 changeType="부가서비스";
		 switch(this.random.nextInt(5)){
		 	case 1:reason="LTE Data함께쓰기";break;
		 	case 2:reason="요금제변경";break;
		 	case 3:reason="부가서비스";break;
		 	case 4:reason="부가요금제";break;
		 	case 5:reason="번호변경안내해지";break;
		 	default:reason="온가족할인";break;
		 }
		 switch(this.random.nextInt(5)){
		 	case 1:relatedChange="자동해지";break;
		 	case 2:relatedChange="기간만료해지";break;
		 	case 3:relatedChange="가입";break;
		 	case 4:relatedChange="고객요청";break;
		 	case 5:relatedChange="해지";break;
		 	default:relatedChange="온가족할인";break;
		 }
		 switch(this.random.nextInt(5)){
		 	case 1:relatedChange="LTE Data함께쓰기";break;
		 	case 2:relatedChange="요금제변경";break;
		 	case 3:relatedChange="부가서비스";break;
		 	case 4:relatedChange="부가요금제";break;
		 	case 5:relatedChange="번호변경안내해지";break;
		 	default:relatedChange="온가족할인";break;
		 }
		 
		 
		 switch(this.random.nextInt(5)){
		 	case 1:description="010-9***-**** LTE T끼리.....";break;
		 	case 2:description="함께쓰기 그룹(모)";break;
		 	case 3:description="LTE T끼리 65요금제 =>......";break;
		 	case 4:description="T골프(LTE실행_13)";break;
		 	case 5:description="멜론뮤직상품";break;
		 	default:description="T끼리프로모션발신";break;
		 }
	}
	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getServiceType() {
		return serviceType;
	}

	public void setServiceType(String serviceType) {
		this.serviceType = serviceType;
	}

	public String getChangeType() {
		return changeType;
	}

	public void setChangeType(String changeType) {
		this.changeType = changeType;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public String getRelatedChange() {
		return relatedChange;
	}

	public void setRelatedChange(String relatedChange) {
		this.relatedChange = relatedChange;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	private Random random;
	
	String date;
	String serviceType;
	String changeType;
	String reason;
	String relatedChange;
	
	String description;
}
