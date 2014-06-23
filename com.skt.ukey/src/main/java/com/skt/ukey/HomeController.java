package com.skt.ukey;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.skt.ukey.model.ContactInfo;
import com.skt.ukey.model.ContactInfoDetail;
import com.skt.ukey.model.Customer;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {

	private static final Logger logger = LoggerFactory
			.getLogger(HomeController.class);

	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("'/' Requested");

		Customer customer = new Customer();

		model.addAttribute("customer", customer);
//		try {
//			Thread.sleep(1000);
//		} catch (InterruptedException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		model.addAttribute("url", "main.jsp");
		return "redirect:customer";
	}
	@RequestMapping(value = "/customer", method = RequestMethod.GET)
	public String customer(Locale locale, Model model) {
		logger.info("'/' Requested");

		Customer customer = new Customer();

		model.addAttribute("customer", customer);
//		try {
//			Thread.sleep(1000);
//		} catch (InterruptedException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		model.addAttribute("url", "main.jsp");
		return "main";
	}

	@RequestMapping(value = "/contact", method = RequestMethod.GET)
	public String contactInfo(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);

		ContactInfo contact = new ContactInfo();
		for (int i = 0; i < 5000; i++) {
			contact.getDetails().add(new ContactInfoDetail());
		}
//		try {
//			Thread.sleep(1000);
//		} catch (InterruptedException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		model.addAttribute("contact", contact);
		
		return "contact";
	}

	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public String test(Locale locale, Model model) {
		logger.info("'/test' Requested");

		ContactInfo contact = new ContactInfo();
		for (int i = 0; i < 5000; i++) {
			contact.getDetails().add(new ContactInfoDetail());
		}
//		try {
//			Thread.sleep(1000);
//		} catch (InterruptedException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		model.addAttribute("contact", contact);
		return "contact";
	}

	@RequestMapping(value = "/customer.json", method = RequestMethod.GET)
	public @ResponseBody Customer customerJson() {
		logger.info("'/customer.json' Requested");

		Customer customer = new Customer();

		return customer;
	}
	@RequestMapping(value = "/contactInfo.json", method = RequestMethod.GET)
	public @ResponseBody ContactInfo contactInfoJson() {
		logger.info("'/contactInfo.json' Requested");

		ContactInfo contact = new ContactInfo();
		for (int i = 0; i < 5000; i++) {
			contact.getDetails().add(new ContactInfoDetail());
		}
//		try {
//			Thread.sleep(1000);
//		} catch (InterruptedException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		
		
		return contact;
	}

}
