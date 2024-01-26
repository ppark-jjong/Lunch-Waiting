package com.example.demo.model.user;

import com.example.demo.model.Store;
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
@Table(name = "waiting")
public class Waiting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "waiting_id", nullable = false)
    private Long waitingId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "store_id", referencedColumnName = "store_id")
    private Store storeInWaiting;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "uuid", referencedColumnName = "uuid")
    private User userInWaiting;

    @Column(name = "waiting_member")
    private Long waitingMember;

    @Column(name = "state")
    private int state;

}