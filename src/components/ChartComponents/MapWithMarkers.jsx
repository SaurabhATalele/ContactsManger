import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapWithMarkers = ({ countriesData }) => {
  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {countriesData.map((country, index) => (
        <Marker
          key={index}
          position={[country.lat, country.lng]}
        >
          <Popup>
            <div>
              <h3>{country.name}</h3>
              <p>Active Cases: {country.active}</p>
              <p>Recovered: {country.recovered}</p>
              <p>Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapWithMarkers;
