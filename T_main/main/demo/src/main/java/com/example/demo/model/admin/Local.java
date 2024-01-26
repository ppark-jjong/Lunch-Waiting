package com.example.demo.model.admin;

import com.example.demo.model.Store;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Entity
@Getter
@Setter
@Table(name = "inform")
@NoArgsConstructor
@Slf4j
public class Local {

    @Id
    @OneToOne
    @JoinColumn(name = "store_id", nullable = false, referencedColumnName = "store_id")
    private Store storeIdInLocal;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "first_node_id", referencedColumnName = "first_node_id")
    private FirstNode firstNodeIdInLocal;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "second_node_id", referencedColumnName = "second_node_id")
    private SecondNode secondNodeIdInLocal;


}