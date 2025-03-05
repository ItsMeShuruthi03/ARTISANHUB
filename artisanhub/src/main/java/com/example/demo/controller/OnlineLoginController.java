package com.example.demo.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.OnlineLogin; // Use OnlineLogin instead of User
import com.example.demo.service.OnlineLoginService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/art")
public class OnlineLoginController {

    @Autowired
    private OnlineLoginService onlineLoginService;

    @PostMapping("/registration")
    public ResponseEntity<?> registerUser(@RequestBody OnlineLogin user) {
        try {
            OnlineLogin registeredUser = onlineLoginService.register(user);
            return ResponseEntity.ok().body("User registered successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Registration failed: " + e.getMessage());
        }
    }


    @PostMapping("/login")
    public ResponseEntity<OnlineLogin> login(@RequestBody OnlineLogin user) {
        OnlineLogin loggedInUser = onlineLoginService.login(user.getEmail(), user.getPassword());
        if (loggedInUser != null) {
            return ResponseEntity.ok(loggedInUser);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
