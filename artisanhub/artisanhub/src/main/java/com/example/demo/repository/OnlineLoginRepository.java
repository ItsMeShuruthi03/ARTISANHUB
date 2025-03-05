package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.OnlineLogin; // Use OnlineLogin instead of User

public interface OnlineLoginRepository extends JpaRepository<OnlineLogin, Long> {
    OnlineLogin findByEmail(String email);
}

