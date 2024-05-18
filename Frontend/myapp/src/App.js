

import './App.css';
import { BrowserRouter as Router, Routes, Route , } from "react-router-dom";
import Navbar from './components/navbar';
import  Home  from "./pages/Home";
import Services from "./pages/Services/Services";
import  About from "./pages/About";
import  Contact  from "./pages/Contact";
import Shipment from './pages/Services/Shipment';
import Tracker from './pages/Services/Tracker';
import Store from './pages/Services/Store';
import Details from './pages/Services/Details'


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Shipment" element={<Shipment />} />
          <Route path="/Tracker" element={<Tracker />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
