import React, { useEffect, useState } from 'react';
import { addProduct } from './api';
import "frontend/src/styles/addstyle.css";
import axios from 'axios';
function Add() {
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        stockQuantity: 0
    });
    
    const [vendorId, setVendorId] = useState(0);
    const [vendors,setVendors] = useState([]);
    useEffect(() => {
        const fetchVendors = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/vendors");
                console.log("Vendors are: ",response.data);
                setVendors(response.data); // Set the vendor data
            } catch (error) {
                console.error("There was an error fetching the vendors!", error);
                setVendors([]); // Ensure vendors is still an array even in case of error
            }
        };
        fetchVendors();
    }, []);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };
    const handleVendorChange = (e) => {
        setVendorId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(product.name === '' || product.price === 0 || product.stockQuantity === 0 || product.vendor_id === 0){
            alert("Please fill all the fields");
            return;
        }
        try{
            const response = axios.post(`http://localhost:8080/api/products/addproduct/${vendorId}`,product);
            console.log("Data added is: ",(await response).data);
        }
        catch(err){
            console.log("There is an error in adding data...");
            console.log(err);
        }
    }

    return (
        <div className='Add'>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"  placeholder="Product Name" onChange={handleChange}/>
                <input type="number" name="price" placeholder="Product Price" onChange={handleChange}/>
                <input type="number" name="stockQuantity" placeholder='Product Quantity' onChange={handleChange}/>
                {vendors.length > 0 ? (
                    <select className='product-select' name="vendor_id" onChange={handleVendorChange}>
                        <option className='product-option' value="">Select Vendor</option>
                        {vendors.map(vendor => (
                            <option className='product-option' key={vendor.id} value={vendor.id}>{vendor.name}</option>
                        ))}
                    </select>
                ) : (
                    <p>Loading vendors...</p>
                )}

                <button id="addbutton"type="submit">Add</button>
            </form>
           
                            
        </div>
    );

}

export default Add;