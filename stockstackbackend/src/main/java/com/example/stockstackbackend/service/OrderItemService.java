package com.example.stockstackbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.stockstackbackend.model.OrderItem;
import com.example.stockstackbackend.repository.OrderItemRepo;

@Service
public class OrderItemService {
    @Autowired
    private OrderItemRepo orderItemRepo;

    public List<OrderItem> getAllOrderItems(){
        return orderItemRepo.findAll();
    }
}
