package com.example.demo.entity.user;

import com.example.demo.entity.StoreEntity;
import com.example.demo.entity.user.pk.RecentStorePKEntity;
import com.example.demo.entity.user.pk.ScrapStorePKEntity;
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
@Table(name = "scrap_store")
@IdClass(ScrapStorePKEntity.class)
public class ScrapStoreEntity {

    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "store_id", referencedColumnName = "store_id")
    private StoreEntity storeInScrapStore;

    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "uuid", referencedColumnName = "uuid")
    private UserEntity userInScrapStore;

}