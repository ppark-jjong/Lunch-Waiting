package com.example.demo.model.user;

import com.example.demo.model.Store;
import com.example.demo.model.user.pk.RecentStorePKEntity;
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
@Table(name = "recent_store")
@IdClass(RecentStorePKEntity.class)
public class RecentStore {
    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "store_id", referencedColumnName = "store_id")
    private Store storeInRecentStore;

    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User userInRecentStore;

}