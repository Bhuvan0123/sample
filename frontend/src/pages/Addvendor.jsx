import axios from 'axios';
import React, { useState } from 'react'
import "frontend/src/styles/addvendorstyle.css";
function Addvendor() {
    const [showmodal, setShowmodal] = useState(false);
    const [vendor, setVendor] = useState({
        name: '',
        contact: '',
    });
    const openModal = () => {
        setShowmodal(true);
    }
    const closeModal = () => {
        setShowmodal(false);
    }
    const handleChange = (e) => {
        setVendor({ ...vendor, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8080/api/vendors/addvendor/${1}`, vendor);
            console.log("Data added is: ", response.data);
        }
        catch (err) {
            console.log("There is an error in adding data...");
            console.log(err);
        }
        setShowmodal(false);
    }
  return (
    <div>
            <h1>Vendors</h1>
            {/* Button to open the modal */}
            <button id="vendoraddbutton" onClick={openModal}>Add Vendor</button>

            {/* Modal */}
            {showmodal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Add Vendor</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Vendor Name"
                                onChange={handleChange}
                                value={vendor.name}
                                required
                            />
                            <input
                                type="text"
                                name="contact"
                                placeholder="Contact Info"
                                onChange={handleChange}
                                value={vendor.contact}
                                required
                            />
                            <button type="submit">Submit</button>
                            <button type="button" onClick={closeModal}>Close</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
  );
}

export default Addvendor