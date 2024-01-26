package com.example.demo.model.user;

import com.example.demo.model.Store;
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
@Table(name = "review_report")
public class ReviewReport {

    @Id
    @OneToOne
    @JoinColumn(name = "review_id", nullable = false, referencedColumnName = "review_id")
    private Review reviewIdInReviewReport;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "store_id", referencedColumnName = "store_id")
    private Store storeInReviewReport;

    @Column
    private String content;


}