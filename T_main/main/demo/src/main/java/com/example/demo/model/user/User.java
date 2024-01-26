package com.example.demo.model.user;

import jakarta.persistence.*;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "`user`")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @Column(name = "user_id")
    private Long userId;

    @Column(name = "username", length = 50)
    private String username;

    @Column(name = "password", length = 100)
    private String password;

    @Column(name = "nickname", length = 50)
    private String nickname;

    @Column(name = "activated")
    private boolean activated;

    @ManyToMany
    @JoinTable(
            name = "user_authority",
            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "authority_name", referencedColumnName = "authority_name")})
    private Set<Authority> authorities;


    @OneToMany(fetch = FetchType.LAZY, mappedBy = "userInRecentStore")
    private List<RecentStore> recentStoreList = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "userInScrapStore")
    private List<ScrapStore> scrapStoreList = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "userInReservation")
    private List<Reservation> reservationList = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "userInWaiting")
    private List<Waiting> waitingList = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "userInReview")
    private List<Review> reviewList = new ArrayList<>();
}