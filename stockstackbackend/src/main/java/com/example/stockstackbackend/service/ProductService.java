package com.example.stockstackbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.stockstackbackend.model.Product;
import com.example.stockstackbackend.model.Vendor;
import com.example.stockstackbackend.repository.ProductRepo;
import com.example.stockstackbackend.repository.VendorRepo;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo;

    @Autowired
    private VendorRepo vendorRepository;
    
    public Product saveProduct(Long vendorId,Product product){
        Vendor vendor = vendorRepository.findById(vendorId).orElse(null);
        product.setVendor(vendor);
        
        return productRepo.save(product);
    }
    
    
    public List<Product> getAllProducts(){
        return productRepo.findAll();
    }

    public Product getProductById(Long productId){
        return productRepo.findById(productId).get();
    }

    public void deleteProduct(Long id){
        productRepo.deleteById(id);
    }

}
