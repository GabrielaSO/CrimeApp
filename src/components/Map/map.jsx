import React from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, Marker } from '@vis.gl/react-google-maps';
import "./map.css";
import mexicano from "../../assets/pin-mexicano.png";
import asaltoCarretera from "../../assets/pin-asalto-carretera.png";
import bloqueo from "../../assets/pin-bloqueo.png";
import incendio from "../../assets/pin-incendio-vehiculo.png";
import data from "./crime_hotspots_mexico_temp.json";
import scheme from "../../Schemas/location-schema.json"

const iconByCategory = {
    "Asalto armado a transportistas": asaltoCarretera,
    "Bloqueo carretero": bloqueo,
    "Quema de vehículo": incendio,
    "Vigilancia / halconeo": mexicano,
    "Extorsión a transportistas": mexicano,
    "Enfrentamiento armado": mexicano,
    "Robo de carga con violencia": mexicano,
    "Privación ilegal de la libertad": mexicano,
    "null": mexicano,
};

const pois = data.map((record, index) => ({
    key: `poi-${index}`,
    category: record.category,
    location: {
        lat: record.incident_location.coordinates.latitude,
        lng: record.incident_location.coordinates.longitude
    }
}));

const PoiMarkers = ({ pois }) => {
    return (
        <>
            {
                pois.map((poi) => (
                    <AdvancedMarker
                        key={poi.key}
                        position={poi.location}>
                        <img
                            src={iconByCategory[poi.category] || defaultIcon}
                            alt={poi.category}
                            style={{ width: 32, height: 38 }}
                        />

                        {/* <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'}></Pin> */}
                    </AdvancedMarker>
                ))
            }
        </>
    );
};

export default function MapComponent() {
    const position = { lat: 21.5042, lng: -104.8946 }; // Coordenadas de ejemplo (Nayarit)

    return (
        <div className="container">
            <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
                <div className='map'>
                    <Map defaultCenter={position} defaultZoom={8} gestureHandling={'greedy'} disableDefaultUI={false} mapId={import.meta.env.VITE_GOOGLE_MAPS_ID}>
                        <PoiMarkers pois={pois} />
                    </Map>
                </div>
            </APIProvider>
        </div >
    )
}