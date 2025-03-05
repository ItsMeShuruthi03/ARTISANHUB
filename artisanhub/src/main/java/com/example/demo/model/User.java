package com.example.demo.model;

import jakarta.persistence.Column;

import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "custom_user_table") // Replace "custom_user_table" with your desired table name
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String first_name;
    public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getFirst_name() {
		return first_name;
	}


	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}


	public String getLast_name() {
		return last_name;
	}


	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}


	public String getCompany() {
		return company;
	}


	public void setCompany(String company) {
		this.company = company;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getApartment() {
		return apartment;
	}


	public void setApartment(String apartment) {
		this.apartment = apartment;
	}


	public String getSuite() {
		return suite;
	}


	public void setSuite(String suite) {
		this.suite = suite;
	}


	public String getCountry() {
		return country;
	}


	public void setCountry(String country) {
		this.country = country;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public String getPincode() {
		return pincode;
	}


	public void setPincode(String pincode) {
		this.pincode = pincode;
	}


	public String getPhone_no() {
		return phone_no;
	}


	public void setPhone_no(String phone_no) {
		this.phone_no = phone_no;
	}


	public String getEmail_id() {
		return email_id;
	}


	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}


	public String getPersonal_details_name() {
		return personal_details_name;
	}


	public void setPersonal_details_name(String personal_details_name) {
		this.personal_details_name = personal_details_name;
	}


	public String getPersonal_details_address() {
		return personal_details_address;
	}


	public void setPersonal_details_address(String personal_details_address) {
		this.personal_details_address = personal_details_address;
	}


	public String getAdhaar_no() {
		return adhaar_no;
	}


	public void setAdhaar_no(String adhaar_no) {
		this.adhaar_no = adhaar_no;
	}


	public int getYears_of_experience() {
		return years_of_experience;
	}


	public void setYears_of_experience(int years_of_experience) {
		this.years_of_experience = years_of_experience;
	}


	public String getProjects_done() {
		return projects_done;
	}


	public void setProjects_done(String projects_done) {
		this.projects_done = projects_done;
	}


	public String getParticipant_name() {
		return participant_name;
	}


	public void setParticipant_name(String participant_name) {
		this.participant_name = participant_name;
	}


	public String getParticipant_phone_no() {
		return participant_phone_no;
	}


	public void setParticipant_phone_no(String participant_phone_no) {
		this.participant_phone_no = participant_phone_no;
	}


	public String getParticipant_email_id() {
		return participant_email_id;
	}


	public void setParticipant_email_id(String participant_email_id) {
		this.participant_email_id = participant_email_id;
	}


	private String last_name;
    private String company;
    private String address;
    private String apartment;
    private String suite;
    private String country;
    private String state;
    private String pincode;
    private String phone_no;
    private String email_id;
    private String personal_details_name;
    private String personal_details_address;
    private String adhaar_no;
    private int years_of_experience;
    private String projects_done;
    private String email; // Ensure this field exists
    public void setEmail(String email) {
		this.email = email;
	}


	// New fields
    private String  participant_name;
    private String   participant_phone_no;
    private String participant_email_id;

    // Constructors
    public User() {
        // Default constructor
    }


    public User(Long id, String first_name, String last_name, String company, String address, String apartment,
			String suite, String country, String state, String pincode, String phone_no, String email_id,
			String personal_details_name, String personal_details_address, String adhaar_no, int years_of_experience,
			String projects_done, String participant_name, String participant_phone_no, String participant_email_id) {
		super();
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.company = company;
		this.address = address;
		this.apartment = apartment;
		this.suite = suite;
		this.country = country;
		this.state = state;
		this.pincode = pincode;
		this.phone_no = phone_no;
		this.email_id = email_id;
		this.personal_details_name = personal_details_name;
		this.personal_details_address = personal_details_address;
		this.adhaar_no = adhaar_no;
		this.years_of_experience = years_of_experience;
		this.projects_done = projects_done;
		this.participant_name = participant_name;
		this.participant_phone_no = participant_phone_no;
		this.participant_email_id = participant_email_id;
    }


	public String getEmail() {
		// TODO Auto-generated method stub
		return null;
	}


	public String getPassword() {
		// TODO Auto-generated method stub
		return null;
	}


	public void setPassword(String password) {
		// TODO Auto-generated method stub
		
	}


	public String getUsername() {
		// TODO Auto-generated method stub
		return null;
	}
 
}