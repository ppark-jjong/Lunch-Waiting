package org.example.testsecurity.config.auth;

import org.example.testsecurity.model.User;
import org.example.testsecurity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class PrincipalDetailService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    //시큐리티 session(내부 Authentication(내부 userDetails))에 저장됨
//    즉 밑에 메서드는 로그인 메서드 서비스라고 봐야됨
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user != null) {
//          Session값에 저장될 userDetail 정보를 리턴해준다
            return new PrincipalDetails(user);
        } else {
            return null;
        }
    }
}