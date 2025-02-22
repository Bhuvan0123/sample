package com.example.stockstackbackend.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Long id;

    @Column(name="username",nullable=false,unique=true)
    private String username;

    @Column(name="password",nullable=false)
    private String password;

    private Boolean proAccess;

    
    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL,fetch= jakarta.persistence.FetchType.LAZY)
    private List<Product> products = new ArrayList<>();

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL,fetch= jakarta.persistence.FetchType.LAZY)
    private List<Order> orders = new ArrayList<>();


    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL,fetch= jakarta.persistence.FetchType.LAZY)    
    private List<Vendor> vendors = new ArrayList<>();
    
    public User() {
    }
    

    public User(Long id, String username, String password, Boolean proAccess, List<Product> products,
            List<Order> orders, List<Vendor> vendors) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.proAccess = proAccess;
        this.products = products;
        this.orders = orders;
        this.vendors = vendors;
    }


    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getUsername() {
        return username;
    }


    public void setUsername(String username) {
        this.username = username;
    }


    public String getPassword() {
        return password;
    }


    public void setPassword(String password) {
        this.password = password;
    }


    public Boolean getProAccess() {
        return proAccess;
    }


    public void setProAccess(Boolean proAccess) {
        this.proAccess = proAccess;
    }


    public List<Product> getProducts() {
        return products;
    }


    public void setProducts(List<Product> products) {
        this.products = products;
    }


    public List<Order> getOrders() {
        return orders;
    }


    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }


    public List<Vendor> getVendors() {
        return vendors;
    }


    public void setVendors(List<Vendor> vendors) {
        this.vendors = vendors;
    }

    
}
