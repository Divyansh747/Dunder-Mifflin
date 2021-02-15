package com.divyansh.dunder.freelancing.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.divyansh.dunder.freelancing.Entity.RegistrationOrgEntity;
import com.divyansh.dunder.freelancing.Repository.RegistrationOrgRepository;

@Service
public class RegistrationOrgService {

	@Autowired
	RegistrationOrgRepository registrationOrgRepository;
	
	@Autowired
	public RegistrationOrgService(RegistrationOrgRepository registrationOrgRepository) {
		this.registrationOrgRepository = registrationOrgRepository;
	}
	
	public Optional<RegistrationOrgEntity> createOrg(RegistrationOrgEntity registrationRequest) throws Exception {

		if (registrationOrgRepository.existsByOrgEmail(registrationRequest.getOrgEmail())) {
			throw new Exception("Email Already Exists!");
		}

		System.out.println("Data received: " + registrationRequest.toString());

		RegistrationOrgEntity registrationOrgEntity = registrationOrgRepository
				.save(new RegistrationOrgEntity(registrationRequest.getOrgEmail(), registrationRequest.getOrgName(), registrationRequest.getOrgContact(), registrationRequest.getOrgPassword()));

		return Optional.ofNullable(registrationOrgEntity);
	}
}
