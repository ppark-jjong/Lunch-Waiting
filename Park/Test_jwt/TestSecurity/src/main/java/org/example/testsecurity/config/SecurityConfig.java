package org.example.testsecurity.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

// 이 클래스는 Configuration 이다 라고 선언하고 커스터마이징 함 (Spring Boot에게 config로 등록되어 관리됨)
// 이 클래스는 Security로 관리 됨 => 즉 Servlet Container에 있는 필터들을 Security를 이용하여 관리하거나 커스터마이징 할 수 있게됨)
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    //    비밀번호 단방향 암호화를 위한 Encoder 함수 지정
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {

        return new BCryptPasswordEncoder();
    }

    /*  이 메서드는 Client가 요청하여 Server에서 응답을 할 때 Servlet Container에서 여러 필터들을 거치는 것을 뻇어와
        해당 Bean 메서드로 필터를 재정의(커스터마이징)하는 메서드 이다.
    * */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf((auth) -> auth.disable()); //csrf라는 위변조 방지 설정이 자동으로 설정되어 있는데 post요청을 보낼 때 csrf 토큰을 보내주어야 작동되므로 일단 disable 해둔다

        http
                .authorizeHttpRequests((auth) -> auth //특정한 요청들을 따로 권한 관리 해줄 수 있는 메서드이다 (무조건 람다식으로 기입해야함)
                        .requestMatchers("/", "/login", "/loginProc", "/join", "/joinProc").permitAll() //어떤 요청들을 따로 관리할 껀지 구체적으로 기입해주는 메서드 (모든 요청을 허용)
                        .requestMatchers("/admin").hasRole("ADMIN") //권한에 따른 요청 허용
                        .requestMatchers("/my/**").hasAnyRole("ADMIN", "USER") //특정할 수 없는 요청들은 ** 라는 와일드 카드로 임의 변수 선언으로 대체 가능하다
                        .anyRequest().authenticated()  //위의 경로 요청 이외의 값들은 로그인을 하면 사용할 수 있게 함
                );

        http
                .formLogin((auth) -> auth.loginPage("/login") //권한이 없으면 로그인 페이지의 경로로 강제로 리다이렉션 해주는 설정
                        .loginProcessingUrl("/loginProc") //Security가 로그인을 했을 때 Client의 정보를 받아 로그인 처리를 해줄 수 있게 요청 경로를 지정해주는 메서드
                        .permitAll().defaultSuccessUrl("/")
                        .usernameParameter("username")
                        .passwordParameter("password"));
        return http.build();
    }

}