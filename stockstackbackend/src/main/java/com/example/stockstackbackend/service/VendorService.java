package com.example.stockstackbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.stockstackbackend.model.User;
import com.example.stockstackbackend.model.Vendor;
import com.example.stockstackbackend.repository.UserRepo;
import com.example.stockstackbackend.repository.VendorRepo;

@Service
public class VendorService {
    @Autowired
    private VendorRepo vendorRepo;

    @Autowired
    private UserRepo userRepo;

    public List<Vendor> getAllVendors(){
        return vendorRepo.findAll();
    }

    public Vendor saveVendor(Long userId,Vendor vendor){
        User user=userRepo.findById(userId).orElseThrow(()->new RuntimeException("User not found"));
        vendor.setUser(user);

        return vendorRepo.save(vendor);
    }

    public void deleteVendorById(Long id){
        vendorRepo.deleteById(id);
    }
}
