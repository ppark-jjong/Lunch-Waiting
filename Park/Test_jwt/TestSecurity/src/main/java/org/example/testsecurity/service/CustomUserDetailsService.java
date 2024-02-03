package org.example.testsecurity.service;

import lombok.extern.slf4j.Slf4j;
import org.example.testsecurity.dto.CustomUserDetails;
import org.example.testsecurity.entity.UserEntity;
import org.example.testsecurity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserEntity userData = userRepository.findByUsername(username);

        if (userData != null) {
            log.info("로그인 정상작동");
            return new CustomUserDetails(userData);
        }
        log.info("로그인 작동 실패");

        return null;
    }
}