package com.example.stockstackbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.stockstackbackend.model.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Long> {

}
