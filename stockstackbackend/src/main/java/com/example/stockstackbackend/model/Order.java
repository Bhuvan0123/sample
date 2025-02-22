package com.example.stockstackbackend.model;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.*;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="orders")
public class Order {
    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne(fetch= jakarta.persistence.FetchType.LAZY)
    @JoinColumn(name="user_id",nullable=false)
    private User user;

    private Date orderDate;
    private String status;

    @JsonIgnore
    @OneToMany(mappedBy = "order",cascade = jakarta.persistence.CascadeType.ALL,fetch= jakarta.persistence.FetchType.LAZY)
    private List<OrderItem> orderItems;

    private Double totalAmount;

    public Order() {
    }

    public Order(Long id, User user, Date orderDate, String status, List<OrderItem> orderItems, Double totalAmount) {
        this.id = id;
        this.user = user;
        this.orderDate = orderDate;
        this.status = status;
        this.orderItems = orderItems;
        this.totalAmount = totalAmount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<OrderItem> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(List<OrderItem> orderItems) {
        this.orderItems = orderItems;
    }
    public Double getTotalAmount() {
        return totalAmount;
    }
    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }
    
}
