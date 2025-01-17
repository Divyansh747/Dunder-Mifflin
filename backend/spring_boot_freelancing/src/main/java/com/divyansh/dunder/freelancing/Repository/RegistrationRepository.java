package com.divyansh.dunder.freelancing.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.divyansh.dunder.freelancing.Entity.RegistrationEntity;

@Repository
public interface RegistrationRepository extends JpaRepository<RegistrationEntity, String>{
	
	List<RegistrationEntity> findAll(); 

	Boolean existsByEmail(String email);
	
	RegistrationEntity findByEmail(String email);
	

}
