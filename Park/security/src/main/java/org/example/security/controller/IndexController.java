package org.example.security.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

public class IndexController {
    @GetMapping({"", "/"})
    public String index() {
        return "index";
    }

    @GetMapping("/user")
    @ResponseBody
    public String user() {
        return "user";
    }

    @GetMapping("/admin")
    @ResponseBody
    public String admin() {
        return "admin";
    }

    @GetMapping("/manager")
    @ResponseBody
    public String manager() {
        return "manager";
    }

    //SecurityConfig 파일 작성 후 작동 안함
    @GetMapping("/login")
    @ResponseBody
    public String login() {
        return "login";
    }

    @GetMapping("/join")
    @ResponseBody
    public String join() {
        return "join";
    }

    @GetMapping("/joinProc")
    public @ResponseBody String joinProc() {
        return "회원가입 완료됨!";
    }
}
