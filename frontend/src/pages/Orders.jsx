import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "frontend/src/styles/orderstyle.css";
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Orders() {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const [activetab, setActiveTab] = useState('table');
    useEffect(() => {
        axios.get("http://localhost:8080/api/orders")
            .then((res) => {
                setOrders(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                console.error("Error fetching orders:", err);
            });
    }, []);

    const graphdata={
        labels:orders.map((order) => new Date(order.orderDate).toLocaleDateString("en-US")),
        datasets:[{
            label:"Orders",
            data:orders.map((order) => order.totalAmount),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    }


    return (
        <div>
            <Sidebar/>
            <div className='table-container'>
                <h1>Orders</h1>
                <div className="order-tabs">
                    <button id="order-button" className={activetab==="table"?"active":""} onClick={()=>{setActiveTab("table")}}>Table</button>
                    <button id="order-button" className={activetab==="graph"?"active":""} onClick={()=>setActiveTab("graph")}>Graph</button>
                </div>
                <div className="order-container">
                  {
                  activetab=="table" && (<table>

                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {orders.map((order, index) => (
                      <tr>
                        <p>Order #{order.id}</p>
                        <p>{new Date(order.orderDate).toLocaleDateString()}</p>
                        <p>{order.status}</p>
                      </tr>
                    ))}
                    </tbody>
                  </table>)}

                  {activetab==="graph" && 
                  (<Bar data={graphdata} />)}
                </div>
            </div>
        </div>
    );
}

export default Orders;
