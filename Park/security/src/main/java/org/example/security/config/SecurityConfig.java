package org.example.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity //스프링 시큐리티 필터가 스프링 필터체인에 등록 (스프링 필터 사용해봣쥬?)
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.authorizeRequests()
                //url에 따라 접속 할 수 있는 권한을 나누고
                .requestMatchers("/user/**").authenticated()
                .requestMatchers("/manager/**").access("hasAnyRole('ROLE_MANAGER','ROLE_ADMIN')")
                .requestMatchers("/admin/**").access("hasRole('ROLE_ADMIN')")
                //위의 3가지 url이 아니면 모든 권한을 허용한다
                .anyRequest().permitAll()
                //만약 권한이 없을 때는 로그인 페이지로 바로 이동하게 만드는 메서드
                .and()
                .formLogin()
                .loginPage("/login");


        return http.build();
    }

    /*
    기존: WebSecurityConfigurerAdapter를 상속하고 configure매소드를 오버라이딩하여 설정하는 방법
    => 현재: SecurityFilterChain을 리턴하는 메소드를 빈에 등록하는 방식(컴포넌트 방식으로 컨테이너가 관리)
    //https://spring.io/blog/2022/02/21/spring-security-without-the-websecurityconfigureradapter

    @Override
    protected void configure(HttpSecurity http) throws  Exception{
        http.csrf().disable();
        http.authorizeRequests()
                .antMatchers("/user/**").authenticated()
                .antMatchers("/manager/**").access("hasRole('ROLE_ADMIN') or hasRole('ROLE_MANAGER')")
                .antMatchers("/admin").access("\"hasRole('ROLE_ADMIN')")
                .anyRequest().permitAll();
    }

     */
}