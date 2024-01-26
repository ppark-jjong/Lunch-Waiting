package com.example.demo.model.owner;

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
@Table(name = "store_request")
public class StoreRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "store_request", nullable = false)
    private Long storeRequest;

    @ManyToOne
    @JoinColumn(name = "owner_uuid", referencedColumnName = "owner_uuid")
    private OwnerUser ownerUserInStoreRequest;

    @Column(name = "store_number")
    private String storeNumber;
}