package com.example.demo.entity.user;

import com.example.demo.entity.StoreEntity;
import com.example.demo.entity.admin.LocalEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Slf4j
@Table(name = "review")
public class ReviewEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id", nullable = false)
    private Long reviewId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "store_id", referencedColumnName = "store_id")
    private StoreEntity storeInReview;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "uuid", referencedColumnName = "uuid")
    private UserEntity userInReview;

    @Column
    private String score;

    @Column
    private String content;

    @Column
    private Date reviewDate;

    @OneToOne(mappedBy = "reviewIdInReviewReport")
    private com.example.demo.entity.user.ReviewReportEntity reviewReportEntity;
}