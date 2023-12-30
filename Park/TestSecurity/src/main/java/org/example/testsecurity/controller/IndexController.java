package org.example.testsecurity.controller;

import org.example.testsecurity.model.User;
import org.example.testsecurity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class IndexController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @GetMapping("/test/login")
    public @ResponseBody String Testlogin(Authentication authentication) {
        System.out.println("/test/login/==========");
        System.out.println("authentication" + authentication.getPrincipal());
        return "세션정보확인하기";
    }

    @GetMapping({"", "/"})
    @ResponseBody
    public String Index() {
        return "인덱스 페이지 입니다";
    }

    @GetMapping("/manager")
    @ResponseBody
    public String manager() {
        return "manager";
    }

    @GetMapping("/loginForm")
    public String login() {
        return "loginForm";
    }

    @GetMapping("/joinForm")
    public String joinForm() {
        return "joinForm";
    }

    @PostMapping("/join")
    public String join(User user) {
        System.out.print(user);
        user.setRole("ROLE_USER");
        //여기 밑에 메서드들은 시큐리티 암호화에 따라 패스워드 설정을 위한 메서드들
        String rawPassword = user.getPassword();
        String encPassword = bCryptPasswordEncoder.encode(rawPassword);
        user.setPassword(encPassword);
        userRepository.save(user);
        return "redirect:/loginForm";
    }

    @Secured("ROLE_ADMIN") //특정 메서드에 권한을 가진 사람만 접속 하게 할 수 있는 어노테이션
    @GetMapping("/info")
    public @ResponseBody String info() {
        return "개인정보";
    }
}