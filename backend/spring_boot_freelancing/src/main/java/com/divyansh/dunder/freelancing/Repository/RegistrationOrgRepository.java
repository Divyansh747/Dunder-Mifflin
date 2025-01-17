package com.divyansh.dunder.freelancing.Repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.divyansh.dunder.freelancing.Entity.RegistrationOrgEntity;

@Repository
public interface RegistrationOrgRepository extends JpaRepository<RegistrationOrgEntity, String>{
	
	Boolean existsByOrgEmail(String orgEmail);
	List<RegistrationOrgEntity> findAll(); 

	RegistrationOrgEntity findByOrgEmail(String orgEmail);
	
}
