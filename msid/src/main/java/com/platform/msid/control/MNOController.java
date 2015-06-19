package com.platform.msid.control;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.platform.msid.model.OTPInfo;

@Controller
public class MNOController {

	private static final Logger logger = LoggerFactory
			.getLogger(MNOController.class);

	@RequestMapping(value = "/otp.json", method = RequestMethod.GET)
	public @ResponseBody OTPInfo checkOTP(@RequestParam("otp") String otp) {
		logger.info("'/OTP.json' Requested {}", otp);

		OTPInfo objOTP = new OTPInfo();
		if ("1234".equals(otp)) {
			objOTP.setResult("pass");
		}else{
			objOTP.setResult("fail");
		}

		return objOTP;
	}
}
