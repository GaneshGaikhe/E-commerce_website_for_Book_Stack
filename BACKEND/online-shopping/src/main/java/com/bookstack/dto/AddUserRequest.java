package com.bookstack.dto;

public class AddUserRequest {

	private String firstName;

	private String lastName;

	private String emailId;

	private String password;

	private String phoneNo;

	private String street;

	private String city;

	private int pincode;
	
	private String role;

	
	
	
	
	
	
	
//"Owner","Admin","admin@gmail.com","admin@123","9425167281","Admin","lal chowk","delhi",52384

	
	
	
	public String getFirstName() {
		return firstName;
	}

	public AddUserRequest(String firstName, String lastName, String emailId, String password, String phoneNo,
			String role,String street, String city ,int pincode ) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.password = password;
		this.phoneNo = phoneNo;
		this.street = street;
		this.city = city;
		this.pincode = pincode;
		this.role = role;
	}



	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	
	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "AddUserRequest [firstName=" + firstName + ", lastName=" + lastName + ", emailId=" + emailId
				+ ", password=" + password + ", phoneNo=" + phoneNo + ", street=" + street + ", city=" + city
				+ ", pincode=" + pincode + "]";
	}

}
