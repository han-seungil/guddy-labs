package com.platform.msid.model;

import java.io.Serializable;

public class OTPInfo  implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String result="";

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}
}
