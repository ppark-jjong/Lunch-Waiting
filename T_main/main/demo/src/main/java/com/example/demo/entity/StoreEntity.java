package com.example.demo.entity;

import com.example.demo.entity.admin.LocalEntity;
import com.example.demo.entity.owner.MenuEntity;
import com.example.demo.entity.owner.OwnerUserEntity;
import com.example.demo.entity.user.*;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Slf4j
@Table(name = "store")
public class StoreEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "store_id", nullable = false)
    private Long storeId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "owner_uuid", referencedColumnName = "owner_uuid")
    private OwnerUserEntity ownerUserInStore;

    @Column(name = "store_name", nullable = false)
    private String storeName;

    @Column(name = "open_hours", nullable = false)
    private Date openHours;

    @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "reservation_state", nullable = false)
    private int reservationState;

    @Column(name = "waiting_state", nullable = false)
    private int waitingState;

    @Column(name = "max_num", nullable = false)
    private int maxNum;

    @Column(name = "waiting_hours", nullable = false)
    private int waitingHours;

    @OneToOne(mappedBy = "storeIdInLocal")
    private LocalEntity localEntity;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "storeInMenu")
    private List<MenuEntity> menuEntityList = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "storeInReservation")
    private List<ReservationEntity> reservationEntityList = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "storeInRecentStore")
    private List<RecentStoreEntity> recentStoreEntityList = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "storeInScrapStore")
    private List<ScrapStoreEntity> scrapStoreEntityList = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "storeInWaiting")
    private List<WaitingEntity> waitingEntityList = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "storeInReview")
    private List<ReviewEntity> reviewEntityList = new ArrayList<>();

}