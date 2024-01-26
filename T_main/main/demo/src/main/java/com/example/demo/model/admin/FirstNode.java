package com.example.demo.model.admin;


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
public class FirstNode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "first_node_id", nullable = false)
    private Long firstNodeId;

    @Column(name = "city_name")
    private String cityName;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "firstNodeIdInLocal")
    private List<Local> localList = new ArrayList<>();

}