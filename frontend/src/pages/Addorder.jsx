import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
function Addorder() {
    const [products, setProducts] = useState([]);
    const [order,setOrder]=useState({
        orderDate:"",
        totalAmount:0,
        status:"",
        products:[{}]
        
    });
    // useEffect(() => {
    //     axios.get("http://localhost:8080/api/products")
    //     .then((res) => {
    //         setProducts(res.data);
    //         console.log(res.data)
    //     })
    // },[])

    
    
    return (
        <div className='table-container'>
            <h2>Create a new order</h2>
            
        </div>
    );
}

export default Addorder;