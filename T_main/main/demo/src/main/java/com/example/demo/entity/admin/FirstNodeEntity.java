package com.example.demo.entity.admin;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Slf4j
@Table(name = "first_node")
public class FirstNodeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "first_node_id", nullable = false)
    private Long firstNodeId;

    @Column(name = "city_name")
    private String cityName;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "firstNodeIdInLocal")
    private List<LocalEntity> LocalEntityList = new ArrayList<>();

}