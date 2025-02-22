package com.example.stockstackbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.stockstackbackend.model.Order;
import com.example.stockstackbackend.service.OrderService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;
    

    @GetMapping
    public List<Order> allorders() {
        return orderService.getAllOrders();
    }
    
}
