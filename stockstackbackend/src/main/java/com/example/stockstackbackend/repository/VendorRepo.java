package com.example.stockstackbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.stockstackbackend.model.Vendor;

@Repository
public interface VendorRepo extends JpaRepository<Vendor,Long>{

}
