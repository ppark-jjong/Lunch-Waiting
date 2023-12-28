package org.example.testsecurity.repository;

import org.example.testsecurity.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
//@Repository가 따로 없어도 IoC가 된다 (JpaRepository를 상속했기 때문임)
public interface UserRepository extends JpaRepository<User, Integer> {
    //JPA Query Methods
    public User findByUsername(String username);
}