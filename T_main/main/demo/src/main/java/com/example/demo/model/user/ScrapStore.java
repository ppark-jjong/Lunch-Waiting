package com.example.demo.model.user;

import com.example.demo.model.Store;
import com.example.demo.model.user.pk.ScrapStorePKEntity;
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
public class ScrapStore {

    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "store_id", referencedColumnName = "store_id")
    private Store storeInScrapStore;

    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User userInScrapStore;

}