package com.example.stockstackbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.stockstackbackend.model.Vendor;
import com.example.stockstackbackend.service.VendorService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/vendors")
public class VendorController {

    @Autowired
    private VendorService vendorService;

    @GetMapping
    public List<Vendor> allvendors() {
        return vendorService.getAllVendors();
    }
    
    @PostMapping("/addvendor/{userId}")
    public ResponseEntity<Vendor> addvendor(@PathVariable Long userId,@RequestBody Vendor entity) {
        try{
            Vendor v=vendorService.saveVendor(userId,entity);
           
            return ResponseEntity.ok(v);
        }
        catch(Exception e){
            System.out.println(entity.getName()+" "+entity.getContact());
            System.out.println(e);
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/deletevendor/{id}")
    public void deleteVendor(@PathVariable Long id) {
        vendorService.deleteVendorById(id);
    }
}
