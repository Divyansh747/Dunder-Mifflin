package com.divyansh.dunder.freelancing.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.annotations.NaturalId;

@Entity
public class RegistrationOrgEntity {

	@Id
	private String orgEmail;
	
	@NaturalId(mutable=true)
	private String orgName;
	@NaturalId(mutable=true)
	private String orgContact;
	@NaturalId(mutable=true)
	private String orgPassword;
	
	public RegistrationOrgEntity() {
		
	}
	
	public RegistrationOrgEntity(String orgEmail, String orgName, String orgContact, String orgPassword) {
		super();
		this.orgEmail = orgEmail;
		this.orgName = orgName;
		this.orgContact = orgContact;
		this.orgPassword = orgPassword;
	}
	public String getOrgEmail() {
		return orgEmail;
	}
	public void setOrgEmail(String orgEmail) {
		this.orgEmail = orgEmail;
	}
	public String getOrgName() {
		return orgName;
	}
	public void setOrgName(String orgName) {
		this.orgName = orgName;
	}
	public String getOrgContact() {
		return orgContact;
	}
	public void setOrgContact(String orgContact) {
		this.orgContact = orgContact;
	}
	public String getOrgPassword() {
		return orgPassword;
	}
	public void setOrgPassword(String orgPassword) {
		this.orgPassword = orgPassword;
	}
	@Override
	public String toString() {
		return "RegistrationOrgEntity [orgEmail=" + orgEmail + ", orgName=" + orgName + ", orgContact=" + orgContact
				+ ", orgPassword=" + orgPassword + "]";
	}
	
	
}
