package com.divyansh.dunder.freelancing.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.annotations.NaturalId;

@Entity
public class RegistrationEntity {

	@Id
	private String email;
	@NaturalId(mutable=true)
	private String firstName;
	
	@NaturalId(mutable=true)
	private String lastName;
	@NaturalId(mutable=true)
	private String githubURL;
	@NaturalId(mutable=true)
	private String contact;
	@NaturalId(mutable=true)
	private String university;
	@NaturalId(mutable=true)
	private String password;
	
	@NaturalId(mutable=true)
	private Boolean programming;
	@NaturalId(mutable=true)
	private Boolean frontEnd;
	@NaturalId(mutable=true)
	private Boolean backEnd;
	@NaturalId(mutable=true)
	private Boolean ml;
	@NaturalId(mutable=true)
	private Boolean android;
	@NaturalId(mutable=true)
	private Boolean iOS;
	@NaturalId(mutable=true)
	private Boolean automation;
	@NaturalId(mutable=true)
	private Boolean blockChain;
	
	public RegistrationEntity() {
		
	}
	
	public RegistrationEntity(String email, String firstName, String lastName, String githubURL, String contact,
			String university, String password, Boolean programming, Boolean frontEnd, Boolean backEnd, Boolean ml,
			Boolean android, Boolean iOS, Boolean automation, Boolean blockChain) {
		super();
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.githubURL = githubURL;
		this.contact = contact;
		this.university = university;
		this.password = password;
		this.programming = programming;
		this.frontEnd = frontEnd;
		this.backEnd = backEnd;
		this.ml = ml;
		this.android = android;
		this.iOS = iOS;
		this.automation = automation;
		this.blockChain = blockChain;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFirstName() {
		return firstName;
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
	public String getGithubURL() {
		return githubURL;
	}
	public void setGithubURL(String githubURL) {
		this.githubURL = githubURL;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getUniversity() {
		return university;
	}
	public void setUniversity(String university) {
		this.university = university;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Boolean getProgramming() {
		return programming;
	}
	public void setProgramming(Boolean programming) {
		this.programming = programming;
	}
	public Boolean getFrontEnd() {
		return frontEnd;
	}
	public void setFrontEnd(Boolean frontEnd) {
		this.frontEnd = frontEnd;
	}
	public Boolean getBackEnd() {
		return backEnd;
	}
	public void setBackEnd(Boolean backEnd) {
		this.backEnd = backEnd;
	}
	public Boolean getMl() {
		return ml;
	}
	public void setMl(Boolean ml) {
		this.ml = ml;
	}
	public Boolean getAndroid() {
		return android;
	}
	public void setAndroid(Boolean android) {
		this.android = android;
	}
	public Boolean getiOS() {
		return iOS;
	}
	public void setiOS(Boolean iOS) {
		this.iOS = iOS;
	}
	public Boolean getAutomation() {
		return automation;
	}
	public void setAutomation(Boolean automation) {
		this.automation = automation;
	}
	public Boolean getBlockChain() {
		return blockChain;
	}
	public void setBlockChain(Boolean blockChain) {
		this.blockChain = blockChain;
	}
	@Override
	public String toString() {
		return "RegistrationEntity [email=" + email + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", githubURL=" + githubURL + ", contact=" + contact + ", university=" + university + ", password="
				+ password + ", programming=" + programming + ", frontEnd=" + frontEnd + ", backEnd=" + backEnd
				+ ", ml=" + ml + ", android=" + android + ", iOS=" + iOS + ", automation=" + automation
				+ ", blockChain=" + blockChain + "]";
	}
	
		
}
