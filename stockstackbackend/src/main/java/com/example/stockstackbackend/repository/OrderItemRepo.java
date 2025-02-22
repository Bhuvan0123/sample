package com.example.stockstackbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.stockstackbackend.model.OrderItem;

@Repository
public interface OrderItemRepo extends JpaRepository<OrderItem, Long> {

     // Find all order items by order ID
     List<OrderItem> findByOrderId(Long orderId);
    
     // Find all order items by product ID (optional)
     List<OrderItem> findByProductId(Long productId);
 
    
}
