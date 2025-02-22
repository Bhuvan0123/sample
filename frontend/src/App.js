import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Edit from './pages/Edit';
import LandingPage from './pages/LandingPage';
import Vendor from './pages/Vendor';
import Orders from './pages/Orders';
import Contact from './pages/Contact';
import Addorder from './pages/Addorder';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/edit-product/:id" element={<Edit/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/vendor" element={<Vendor/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/addorder" element={<Addorder />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
