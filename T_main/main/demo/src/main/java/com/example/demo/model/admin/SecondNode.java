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
@Table(name = "second_node")
public class SecondNode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "second_node_id", nullable = false)
    private Long secondNodeId;

    @Column(name = "district_name")
    private String districtName;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "secondNodeIdInLocal")
    private List<Local> localList = new ArrayList<>();

}