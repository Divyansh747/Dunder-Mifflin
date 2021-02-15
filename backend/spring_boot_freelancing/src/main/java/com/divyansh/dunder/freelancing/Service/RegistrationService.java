package com.divyansh.dunder.freelancing.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.divyansh.dunder.freelancing.Entity.RegistrationEntity;
import com.divyansh.dunder.freelancing.Repository.RegistrationRepository;

@Service
public class RegistrationService {

	@Autowired
	RegistrationRepository registrationRepository;
	
	@Autowired
	public RegistrationService(RegistrationRepository registrationRepository) {
		this.registrationRepository = registrationRepository;
	}
	
	public Optional<RegistrationEntity> createUser(RegistrationEntity registrationRequest) throws Exception {

		if (registrationRepository.existsByEmail(registrationRequest.getEmail())) {
			throw new Exception("Email Already Exists!");
		}

		System.out.println("Data received: " + registrationRequest.toString());

		RegistrationEntity registrationEntity = registrationRepository
				.save(new RegistrationEntity(registrationRequest.getFirstName(), registrationRequest.getLastName(),
						registrationRequest.getEmail(), registrationRequest.getContact(), registrationRequest.getGithubURL(),
						registrationRequest.getPassword(), registrationRequest.getUniversity(),registrationRequest.getAndroid(),
						registrationRequest.getAutomation(), registrationRequest.getBackEnd(), registrationRequest.getBlockChain(), 
						registrationRequest.getiOS(), registrationRequest.getMl(), registrationRequest.getProgramming(), registrationRequest.getFrontEnd()));

		return Optional.ofNullable(registrationEntity);
	}
	
	public List<RegistrationEntity> findAll() {
		return registrationRepository.findAll(); 
	}
}
