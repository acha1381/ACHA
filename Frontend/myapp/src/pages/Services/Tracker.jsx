import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Tracker.css';

const trackingData = [
  { id: '120021', details: 'Shipment 120021 details', lat: 13.5583, lng: 79.005 },
  { id: '120012', details: 'Shipment 121212 details', lat: 51.515, lng: -0.1 },

];

function Tracker() {
  const [trackerId, setTrackerId] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const foundTracker = trackingData.find(item => item.id === trackerId);
    setResult(foundTracker ? foundTracker : 'No match found');
  };

  return (
    <div className="tracker">
      <h2>Tracker</h2>
      <div className="form-group">
        <label>Tracker ID:</label>
        <input
          type="text"
          value={trackerId}
          onChange={e => setTrackerId(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Find</button>
      {result && (
        typeof result === 'string' ? (
          <div className="result">{result}</div>
        ) : (
          <div className="result">
            <div className="result-details">
              <p><strong>Details:</strong> {result.details}</p>
            </div>
            <MapContainer
              center={[result.lat, result.lng]}
              zoom={13}
              scrollWheelZoom={false}
              className="map"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
              />
              <Marker position={[result.lat, result.lng]}>
                <Popup>
                  {result.details}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        )
      )}
    </div>
  );
}

export default Tracker;
