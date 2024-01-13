package org.example.jwt.config;

import jakarta.servlet.Filter;
import org.apache.catalina.filters.CorsFilter;
import org.example.jwt.filter.MyFilter1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@Configuration
@EnableWebSecurity // 시큐리티 활성화 -> 기본 스프링 필터체인에 등록
public class SecurityConfig {
    @Autowired
    private CorsConfig corsConfig;

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return
                http.addFilterBefore(new MyFilter1(), BasicAuthenticationFilter.class);
                http.csrf().disable()
                        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)//STATELESS는 세션 방식을 사용하지 않겠다라는 뜻)
                        .and()
                        .formLogin().disable() // form 로그인을 안쓴다면 고정적으로 걸어줘야 할 코드 (jwt 쓸 때는 무조건 이렇게 하라는데,,? 스프링 시큐리티랑 좀 다른가벼)
                        .httpBasic().disable() //위 메서드 중 sessionManagement와 비슷하게 session 방식의 로그인 버젼을 사용하지 않고 토큰 방식을 사용하겠다라고 지정해줌 disable로
                        .apply(new MyCustomDsl()) // 커스텀 필터 등록
                        .and()
                        .authorizeRequests(authroize -> authroize.antMatchers("/api/v1/user/**")
                                .access("hasRole('ROLE_USER') or hasRole('ROLE_MANAGER') or hasRole('ROLE_ADMIN')")
                                .antMatchers("/api/v1/manager/**")
                                .access("hasRole('ROLE_MANAGER') or hasRole('ROLE_ADMIN')")
                                .antMatchers("/api/v1/admin/**")
                                .access("hasRole('ROLE_ADMIN')")
                                .anyRequest().permitAll())
                        .build();
    }

    public class MyCustomDsl extends AbstractHttpConfigurer<MyCustomDsl, HttpSecurity> {
        @Override
        public void configure(HttpSecurity http) throws Exception {
            AuthenticationManager authenticationManager = http.getSharedObject(AuthenticationManager.class);
            http
                    .addFilter(corsConfig.corsFilter()) //인증 요청이 들어왔을 때 CorsConfig 클래스에 있는 인증필터를 따르라는 메서드
                    .addFilter(new JwtAuthenticationFilter(authenticationManager))
                    .addFilter(new JwtAuthorizationFilter(authenticationManager, userRepository));
        }
    }

}