package org.example.testjwt.service;

import org.example.testjwt.dto.CustomUserDetails;
import org.example.testjwt.entity.UserEntity;
import org.example.testjwt.repository.UserRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {
    private final UserRepository userRepository;

    public CustomUserDetailService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //    UserDetailService 내장 메서드로 필수로 처리해야함
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserEntity user = userRepository.findByUsername(username);
        if (user != null ) {
            return new CustomUserDetails(user);
        }

        return null;
    }
}