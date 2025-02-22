package com.example.stockstackbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.stockstackbackend.model.OrderItem;
import com.example.stockstackbackend.service.OrderItemService;


@RestController
@RequestMapping("/api/orderitems")
@CrossOrigin("http://localhost:3000")
public class OrderItemController {
    @Autowired
    private OrderItemService orderItemService;

    @GetMapping
    public List<OrderItem> allorderitems() {
        return orderItemService.getAllOrderItems();
    }
    
}
