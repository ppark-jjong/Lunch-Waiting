package com.example.demo.entity.user;

import com.example.demo.entity.StoreEntity;
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
@Table(name = "user")
public class UserEntity {

    @Id
    private String uuid;

    @Column
    private String password;

    @Column
    private String tel;

    @Column
    private String nickname;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "userInRecentStore")
    private List<RecentStoreEntity> recentStoreEntityList = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "userInScrapStore")
    private List<ScrapStoreEntity> scrapStoreEntityList = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "userInReservation")
    private List<ReservationEntity> reservationEntityList = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "userInWaiting")
    private List<WaitingEntity> waitingEntityList = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "userInReview")
    private List<ReviewEntity> reviewEntityList = new ArrayList<>();
}