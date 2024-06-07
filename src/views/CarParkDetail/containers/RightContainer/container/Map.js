import React, { useState } from "react";
import {
    GoogleMap,
    Marker,
    MarkerF,
    useLoadScript,
} from "@react-google-maps/api";
import { MapContainer } from "../styles";

export default function GMap({
    defaultZoom = 15,
    center = { lat: 22.313578, lng: 114.216955 },
    marker = { lat: 22.313578, lng: 114.216955 },
    img = "/img/pin.png",
    onDragEnd = () => { }, // func
}) {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
        libraries: ['places'],
        region: "hk",
    });

    return (
        <div>
            <MapContainer>
                {isLoaded && (
                    <GoogleMap
                        options={{
                            disableDefaultUI: true,
                            zoomControl: true,
                            gestureHandling: "greedy",
                        }}
                        mapContainerStyle={{
                            width: "100%",
                            height: "100%",
                        }}
                        zoom={defaultZoom}
                        center={center}
                    >
                        <MarkerF
                            draggable
                            position={marker}
                            icon={{
                                url: img,
                                scaledSize: new window.google.maps.Size(68, 82),
                            }}
                            onDragEnd={(e) => {
                                const geocoder = new window.google.maps.Geocoder();

                                const pos = {
                                    lat: e.latLng.lat(),
                                    lng: e.latLng.lng(),
                                };
                                geocoder.geocode({ // async
                                    location: pos
                                }).then((response) => {
                                    if (response.results[0]) {
                                        onDragEnd(pos, response.results[0].formatted_address);
                                    }
                                });
                            }}
                        />
                    </GoogleMap>
                )}
            </MapContainer>
            <div>Please input address details field before moving map pin</div>
        </div>
    );
}
