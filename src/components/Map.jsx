import React from 'react'
import { useState, useRef } from 'react';
import L from 'leaflet';
import { MapContainer, Popup, Marker, TileLayer } from 'react-leaflet'
import locationIcon from '../assets/icon-location.svg'
import { useContext } from 'react';
import AppContext from '../AppContext';

function Map({ center }) {
    const mapRef = useContext(AppContext);

    const customIcon = L.icon({
        iconUrl: locationIcon,
        iconSize: [40, 48],
        iconAnchor: null,
        popupAnchor: null,
    });

    return (
        <>
            <MapContainer center={center} ref={mapRef} zoom={17} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={customIcon} position={center} draggable={true}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}

export default Map;