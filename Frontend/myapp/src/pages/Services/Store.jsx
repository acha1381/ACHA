import React, { useState } from 'react';
import './Store.css';

const stores = [
  { district: 'Chittoor', city: 'Kallur', pincode: '517113', details: 'Near APSRTC KALLUR< KALLUR 517113 ', Contact : "Abc@Gmail.com" },
  { district: 'District2', city: 'City2', pincode: '654321', details: 'Store2 Details' },
  
];

function Store() {
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const foundStore = stores.find(store =>
      store.district === district && store.city === city && store.pincode === pincode
    );
    setResult(foundStore ? foundStore : 'No match found');
  };

  return (
    <div className="store-locator">
      <h2>Store Locator</h2>
      <div className="form-group">
        <label>District:</label>
        <input type="text" value={district} onChange={e => setDistrict(e.target.value)} />
      </div>
      <div className="form-group">
        <label>City:</label>
        <input type="text" value={city} onChange={e => setCity(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Pincode:</label>
        <input type="text" value={pincode} onChange={e => setPincode(e.target.value)} />
      </div>
      <button onClick={handleSearch}>Find</button>
      {result && (
        typeof result === 'string' ? (
          <div className="result">{result}</div>
        ) : (
          <div className="result-table">
            <h1> BRANCH DETAILS</h1>
            <div className="result-row">
              <div className="result-cell"><strong>District:</strong></div>
              <div className="result-cell">{result.district}</div>
            </div>
            <div className="result-row">
              <div className="result-cell"><strong>City:</strong></div>
              <div className="result-cell">{result.city}</div>
            </div>
            <div className="result-row">
              <div className="result-cell"><strong>Pincode:</strong></div>
              <div className="result-cell">{result.pincode}</div>
            </div>
            <div className="result-row">
              <div className="result-cell"><strong>Details:</strong></div>
              <div className="result-cell">{result.details}</div>
            </div>
            <div className="result-row">
              <div className="result-cell"><strong>Contact:</strong></div>
              <div className="result-cell">{result.Contact}</div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Store;
