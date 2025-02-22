package com.example.stockstackbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.stockstackbackend.model.Order;

@Repository
public interface OrderRepo extends JpaRepository<Order, Long>{

     // Find all orders for a specific user
     List<Order> findByUserId(Long userId);
    
     // Find orders by status (optional, if needed)
     List<Order> findByStatus(String status);
    
}
