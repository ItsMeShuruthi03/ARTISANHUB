package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.OnlineLogin; // Use OnlineLogin instead of User
import com.example.demo.model.User;
import com.example.demo.repository.OnlineLoginRepository;

@Service
public class OnlineLoginService {

    @Autowired
    private OnlineLoginRepository onlineLoginRepository;

    public OnlineLogin register(OnlineLogin user) {
        return onlineLoginRepository.save(user);
    }

    public OnlineLogin login(String email, String password) {
        OnlineLogin user = onlineLoginRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }

	public void registerUser(User user) {
		// TODO Auto-generated method stub
		
	}
}
