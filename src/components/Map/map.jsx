import React from 'react';
import { APIProvider, Map, AdvancedMarker} from '@vis.gl/react-google-maps';
import "./map.css";
import marker01 from "../../assets/marker01.png";


export default function MapComponent() {
    const position = { lat: 21.5042, lng: -104.8946 }; // Coordenadas de ejemplo (Nayarit)

    return (
        <div className="container">
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <div className='map'>
                    <Map
                        defaultCenter={position}
                        defaultZoom={20}
                        gestureHandling={'greedy'}
                        disableDefaultUI={false}
                        mapId={import.meta.env.VITE_MAP_ID}
                    >
                        {/* <AdvancedMarker className="marker" position={position}>
                            <img src={{ marker01 }} alt="Custom Marker"/>
                        </AdvancedMarker> */}
                    </Map>
                </div>
            </APIProvider >
        </div >
    )
}