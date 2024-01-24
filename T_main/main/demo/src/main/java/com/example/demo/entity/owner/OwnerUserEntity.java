package com.example.demo.entity.owner;

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
@Table(name = "store")
public class OwnerUserEntity {
    @Id
    @Column(name = "owner_uuid", nullable = false)
    private String ownerUuid;

    @Column(name = "password")
    private String password;

    @Column(name = "name")
    private String name;

    @Column(name = "tel")
    private String tel;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "ownerUserInStore")
    private List<StoreEntity> storeEntityList = new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "ownerUserInStoreRequest")
    private List<StoreRequestEntity> storeRequestEntityList = new ArrayList<>();

}