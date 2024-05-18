import React from "react";
import { Link } from "react-router-dom";
import './Services.css';
import Shipment1 from "./Shipment1.jpg";
import Track from "./Track.jpg";
import Store from "./Store.jpg"


const Services = () => {
  return (
    <div>
      <h2>Our Services</h2>
      <p>We offer the following services:</p>
      <div className="service-container">
        <div className="service">
          <img className="service-image" src={Shipment1} alt="Shipment"  />
          <p>Efficient handling and transportation of your goods to their destination.</p>
          <button className="b1"><Link to="/Shipment">Shipment</Link></button>
          <button className="b2"><Link to="/Details">Check Details</Link></button>
        </div>
        <div className="service">
        <img className="service-image" src={Track} alt="Shipment"  />
          <p>Real-time tracking of your shipments for complete transparency and peace of mind.</p>
          <button><Link to="/Tracker">Tracker</Link></button>
        </div>
        <div className="service">
        <img className="service-image" src={Store} alt="Shipment"  />
          <p>Locate our Services at your Areas</p>
          <button><Link to="/Store">Locate</Link></button>
        </div>
        
      </div>
    </div>
  );
};

export default Services;
