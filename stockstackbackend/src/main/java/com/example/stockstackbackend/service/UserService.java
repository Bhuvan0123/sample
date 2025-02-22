package com.example.stockstackbackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.stockstackbackend.model.User;
import com.example.stockstackbackend.repository.UserRepo;

@Service
public class UserService {
    
    @Autowired
    private UserRepo userRepo;

    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    public User saveUser(User user){
        return userRepo.save(user);
    }

    public Optional<User> getUserById(Long userId){
        return userRepo.findById(userId);
    }

    public void deleteUser(Long id){
        userRepo.deleteById(id);
    }




}
