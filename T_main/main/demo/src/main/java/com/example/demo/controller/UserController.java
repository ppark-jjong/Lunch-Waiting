package com.example.demo.controller;

import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/login")
    public String loginPage() {

        return "login 페이지 이동";
    }

    @PostMapping("/login")
    public String login() {


        return "login 동작 성공";
    }

    @GetMapping("/signup")
    public String stgnUpPage() {
        return "회원가입 페이지 이동";
    }

    @PostMapping("/signup")
    public String signUp() {
        return "회원가입 동작 성공";
    }
}