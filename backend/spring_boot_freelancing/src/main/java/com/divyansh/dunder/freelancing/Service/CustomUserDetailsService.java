package com.divyansh.dunder.freelancing.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.divyansh.dunder.freelancing.Entity.RegistrationEntity;
import com.divyansh.dunder.freelancing.Entity.RegistrationOrgEntity;
import com.divyansh.dunder.freelancing.Repository.RegistrationOrgRepository;
import com.divyansh.dunder.freelancing.Repository.RegistrationRepository;

import java.util.ArrayList;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private RegistrationRepository repository;

    @Autowired
    private RegistrationOrgRepository orgrepository;

    private String email;
    private String password;    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

    	if(repository.existsByEmail(username)) {
        	RegistrationEntity user = repository.findByEmail(username);
        	email = user.getEmail();
        	password = user.getPassword();
        
        }
        else if(orgrepository.existsByOrgEmail(username)) {
        	RegistrationOrgEntity user1 = orgrepository.findByOrgEmail(username);
        	email = user1.getOrgEmail();
        	password = user1.getOrgPassword();
        }
    	return new org.springframework.security.core.userdetails.User(email, password, new ArrayList<>());
        }
}