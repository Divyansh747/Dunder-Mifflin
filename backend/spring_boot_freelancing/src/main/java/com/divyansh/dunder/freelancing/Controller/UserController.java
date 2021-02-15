package com.divyansh.dunder.freelancing.Controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.divyansh.dunder.freelancing.Entity.RegistrationEntity;
import com.divyansh.dunder.freelancing.Entity.RegistrationOrgEntity;
import com.divyansh.dunder.freelancing.Service.RegistrationOrgService;
import com.divyansh.dunder.freelancing.Service.RegistrationService;


@RestController
public class UserController {
	
	@Autowired
	RegistrationService registrationService;

	RegistrationOrgService registrationOrgService;
	
	@RequestMapping("/userlogin")
	public String userValidation() {
		return "User Login successfull";
	}
	
	@RequestMapping("/adminlogin")
	public String adminValidation() {
		return "Admin Login successfull";
	}
	
	@PostMapping("/userRegistration")
	public ResponseEntity<?> createUser(@Valid @RequestBody RegistrationEntity registrationRequest) throws Exception {
		return ResponseEntity.ok(registrationService.createUser(registrationRequest));
	}
	
	@GetMapping("/userRegistration")
	public ResponseEntity<?> getAllUser() throws Exception {
		return ResponseEntity.ok(registrationService.findAll());
	}
	
	@PostMapping("/orgRegistration")
	public ResponseEntity<?> createOrg(@Valid @RequestBody RegistrationOrgEntity registrationRequest) throws Exception {
		return ResponseEntity.ok(registrationOrgService.createOrg(registrationRequest));
	}
}
