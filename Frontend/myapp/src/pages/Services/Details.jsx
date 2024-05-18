import React, { useState } from 'react';
import axios from 'axios'; 
import './Details.css'

const Details = () => {
  const [id, setId] = useState('');
  const [shipment, setShipment] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://6646e06351e227f23ab020ef.mockapi.io/Shipment/${id}`);
      setShipment(response.data);
      setError('');
    } catch (error) {
      setShipment(null);
      setError('Error fetching data. Please try again.');
    }
  };

  return (
    <div className="shipment-details">
      <h2>Shipment Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter Shipment ID"
        />
        <button type="submit">Fetch Details</button>
      </form>
      {error && <p className="error">{error}</p>}
      {shipment && (
        <div className="shipment">
          <p>ID: {shipment.ID}</p>
          <p>From: {shipment.From}</p>
          <p>To: {shipment.To}</p>
          <p>Weight: {shipment.Weight}</p>
          <p>Height: {shipment.Height}</p>
          <p>Length: {shipment.Length}</p>
          {/* Add other details */}
        </div>
      )}
    </div>
  );
};

export default Details;
