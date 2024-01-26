package com.example.demo.model.admin;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Slf4j
@Table(name = "admin")
public class Admin {
    @Id
    private String adminUuid;

    @Column(name = "password")
    private String password;

    @Column(name = "name")
    private String name;


}