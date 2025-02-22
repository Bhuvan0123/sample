package com.example.stockstackbackend.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.stockstackbackend.model.Product;
import com.example.stockstackbackend.service.ProductService;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/hello")
    public String getMethodName() {
        return "Hello I am running";
    }


    @GetMapping
    public ResponseEntity<List<Product>> allproducts() {
        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
    }
    
    @PostMapping("/addproduct/{vendorId}")
    public ResponseEntity<Product> addProducts(@PathVariable Long vendorId,@RequestBody Product entity) {
        
        return new ResponseEntity<>(productService.saveProduct(vendorId,entity), HttpStatus.CREATED);
       
    }

    @DeleteMapping("/deleteproduct/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }
    
    
}
