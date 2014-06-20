package com.skt.ukey.model;

import static org.junit.Assert.*;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

public class CustomerTest {

	static Customer customer;
	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
		customer = new Customer();
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
		System.out.println("tearDown code run");
	}

	@Test
	public void testCustomer() {
		System.out.println("testCustomer code run");
	}

	@Test
	public void testSetContactMain1st() {
		System.out.println(customer.getContactMain2nd());
		assertTrue(8 == customer.getContactMain2nd().length());
	}

	@Test
	public void testGetContactMain2nd() {
		System.out.println("testGetContactMain2nd code run");
		System.out.println(customer.getContactMain2nd());
		assertTrue(8 == customer.getContactMain2nd().length());
	}

	
}
