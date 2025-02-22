import React, { useEffect, useState } from 'react'
import { deleteProduct, getProducts } from './api';
import Add from './Add';
import { Link } from 'react-router-dom';
import "frontend/src/styles/homestyle.css"
import NavigationBar from './NavigationBar';
import axios, { Axios } from 'axios';
import Sidebar from './Sidebar';
function Home() {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        axios.get("http://localhost:8080/api/products")
        .then((res)=>{
            console.log(res.data);
            setProducts(res.data);
        }).catch((err)=>{
            console.log("There is error in fetching data...");
            console.log(err);
        });
    },[]);

    useEffect(()=>{
        let sum=0;
        products.forEach((product)=>{
            sum+=product.price*product.stockQuantity;
        });
        setTotal(sum);
    },[products.length]);

    const handleDelete = (id) =>{
        const isConfirmed=window.confirm("Do you want to delete this product?");
        if(isConfirmed){
            axios.delete(`http://localhost:8080/api/products/deleteproduct/${id}`)
            .then((res)=>{
                console.log("Product deleted successfully");
            }).catch((err)=>{
                console.log(err);
        });
    }}

    return (
        <div >            
            {/* <NavigationBar/> */}
            <Sidebar/>
            <div  className='table-container'>
                <Add/>
                <hr/>

                <h1>Products Available </h1>
                <h3>Total Value: {total}</h3>
                <table>
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </thead>
                    <tbody>
                        {products.map((product,k)=>{
                            return(
                                <div>
                                <tr>
                                    <td>{product.id}</td>
                                    <td>{product.name.trim()}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stockQuantity}</td>
                                    
                                
                                <td><button onClick={()=>handleDelete(product.id)} className='delete-button'>Delete</button></td>
                                
                                </tr>
                                </div>
                            );
                        })}
                    </tbody>
                </table>
                
            </div>
        </div>
    );
}

export default Home;