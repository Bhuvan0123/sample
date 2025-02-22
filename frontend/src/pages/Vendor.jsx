import React, { useEffect, useState } from 'react'
import "frontend/src/styles/homestyle.css";
import NavigationBar from './NavigationBar';
import axios from 'axios';
import Addvendor from './Addvendor';
import Sidebar from './Sidebar';
function Vendor() {
    const [vendors,setVendors] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/api/vendors")
        .then((res)=>{
            console.log(res.data);
            setVendors(res.data);
        }).catch((err)=>{
            console.log("There is error in fetching data...");
            console.log(err);
        });
    },[]);
    const deleteProduct = (id) =>{
        const isConfirmed=window.confirm("Do you want to delete this product?");
        if(isConfirmed){
            axios.delete(`http://localhost:8080/api/vendors/deletevendor/${id}`)
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
            <Addvendor/>
            <h1>Vendors Existing </h1>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Products</th>
                    <th>Contact</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {vendors.map((vendor,k)=>{
                        let ps="";
                        if((vendor.products).length===0){
                            ps="No products";
                        }
                        else{
                        (vendor.products).forEach((product)=>{
                            ps+=product.name+" ";
                        });}

                        return(
                            <div>
                            <tr>
                                <td>{vendor.name.trim()}</td>
                                <td>{ps}</td>
                                <td>{vendor.contact}</td>
                                <td><button className='delete-button' onClick={()=>{deleteProduct(vendor.id)}}>Delete</button></td>
                                
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

export default Vendor;