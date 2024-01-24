package com.example.demo.entity.user;

import com.example.demo.entity.StoreEntity;
import com.example.demo.entity.user.pk.RecentStorePKEntity;
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
public class RecentStoreEntity {
    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "store_id", referencedColumnName = "store_id")
    private StoreEntity storeInRecentStore;

    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "uuid", referencedColumnName = "uuid")
    private UserEntity userInRecentStore;

}