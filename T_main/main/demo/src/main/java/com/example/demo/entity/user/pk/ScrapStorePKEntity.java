package com.example.demo.entity.user.pk;

import com.example.demo.entity.StoreEntity;
import com.example.demo.entity.user.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ScrapStorePKEntity implements Serializable {
    private StoreEntity storeInRecentStore;
    private UserEntity userInRecentStore;
}
