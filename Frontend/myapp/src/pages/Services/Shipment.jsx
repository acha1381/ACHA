import React, { useState, useEffect } from "react";
import "./Shipment.css";



const pincodeToCityMapping = {
  "517113": ["Kallur", "Chittoor"],
  "521356": ["Gudlavalleru", "Vijayawada"],
  
};

const Shipment = () => {
  const [fromPincode, setFromPincode] = useState("");
  const [toPincode, setToPincode] = useState("");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [weight, setWeight] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [length, setLength] = useState("");
  const [content, setContent] = useState("");

  
  useEffect(() => {
    setFromCity(pincodeToCityMapping[fromPincode]?.[0] || "");
  }, [fromPincode]);

  useEffect(() => {
    setToCity(pincodeToCityMapping[toPincode]?.[0] || "");
  }, [toPincode]);

  const handleFromPincodeChange = (e) => {
    setFromPincode(e.target.value);
  };

  const handleToPincodeChange = (e) => {
    setToPincode(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleLengthChange = (e) => {
    setLength(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const formData = {
      fromPincode,
      toPincode,
      fromCity,
      toCity,
      weight,
      width,
      height,
      length,
      content,
    };
    console.log(formData);
  };

  return (
    <div className="shipment-container">

  <div className="main-column">
    <form onSubmit={handleSubmit}>
      <div className="input-container1">
        <div className="label-container">
          <label htmlFor="fromPincode">From Pincode:</label>
        </div>
        <input
          type="text"
          id="fromPincode"
          className="input-field"
          value={fromPincode}
          onChange={handleFromPincodeChange}
        />
        {fromCity && <span className="city-effect">City: {fromCity}</span>}
      </div>
      <div className="input-container2">
        <div className="label-container">
          <label htmlFor="toPincode">To Pincode:</label>
        </div>
        <input
          type="text"
          id="toPincode"
          className="input-field"
          value={toPincode}
          onChange={handleToPincodeChange}
        />
        {toCity && <span className="city-effect">City: {toCity}</span>}
      </div>
      <div className="input-container">
        <div className="label-container">
          <label htmlFor="weight">Weight (kg):</label>
        </div>
        
        <input
          type="text"
          id="weight"
          className="input-field"
          value={weight}
          onChange={handleWeightChange}
        />
      </div>
      <div className="input-container">
        <div className="label-container">
          <label>Measurement (cm):</label>
        </div>
        <div>
          <input
            type="number"
            placeholder="Width"
            className="input-field"
            value={width}
            onChange={handleWidthChange}
          />
          <input
            type="number"
            placeholder="Height"
            className="input-field"
            value={height}
            onChange={handleHeightChange}
          />
          <input
            type="number"
            placeholder="Length"
            className="input-field"
            value={length}
            onChange={handleLengthChange}
          />
        </div>
      </div>
      <div className="input-container">
        <div className="label-container">
          <label>Content:</label>
        </div>
        <select
          value={content}
          className="select-field"
          onChange={handleContentChange}
        >
          <option value="">Select Content</option>
          <option value="Books">Books</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          
        </select>
      </div>
      <div className="button-container">
        <button type="submit" >Submit</button>
      </div>
    </form>
  </div>
</div>
)};



export default Shipment;
