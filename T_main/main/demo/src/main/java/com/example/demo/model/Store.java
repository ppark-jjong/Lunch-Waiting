package com.example.demo.model;

import com.example.demo.model.admin.Local;
import com.example.demo.model.owner.Menu;
import com.example.demo.model.owner.OwnerUser;
import com.example.demo.model.user.*;
import com.example.demo.model.user.ReviewReport;
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
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "store_id", nullable = false)
    private Long storeId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "owner_uuid", referencedColumnName = "owner_uuid")
    private OwnerUser ownerUserInStore;

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
    private Local local;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "storeInMenu")
    private List<Menu> menuList = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "storeInReservation")
    private List<Reservation> reservationList = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "storeInRecentStore")
    private List<RecentStore> recentStoreList = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "storeInScrapStore")
    private List<ScrapStore> scrapStoreList = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "storeInWaiting")
    private List<Waiting> waitingList = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "storeInReview")
    private List<Review> reviewList = new ArrayList<>();
    
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "storeInReviewReport")
    private List<ReviewReport> reviewReportList = new ArrayList<>();
}