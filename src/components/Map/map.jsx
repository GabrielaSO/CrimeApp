import React from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import "./map.css";

export default function MapComponent() {
    const position = { lat: 21.5042, lng: -104.8946 }; // Coordenadas de ejemplo (Nayarit)

    return (
        <div className="container">
                <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                    <div className='map'>
                        <Map
                            defaultCenter={position}
                            defaultZoom={10}
                            gestureHandling={'greedy'}
                            disableDefaultUI={false}
                        />
                    </div>
                </APIProvider>
        </div>
    )
}