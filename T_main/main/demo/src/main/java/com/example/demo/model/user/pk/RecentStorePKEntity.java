package com.example.demo.model.user.pk;

import com.example.demo.model.Store;
import com.example.demo.model.user.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RecentStorePKEntity implements Serializable {
    private Store storeInRecentStore;
    private User userInRecentStore;
}
