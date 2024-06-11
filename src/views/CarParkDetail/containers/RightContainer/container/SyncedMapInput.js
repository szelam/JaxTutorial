import React from "react";
import CustomInput from "../../../../../components/CustomInput";
import { usePlacesWidget } from "react-google-autocomplete";

export default function SyncedMapInput({ onEnter = () => { } }) {
    const { ref } = usePlacesWidget({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
        onPlaceSelected: (place) => {
            console.log("Place selected:", place);
            if (place.geometry) {
                onEnter({
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                }, place.formatted_address);
            } else {
                console.log("Place does not have geometry information.");
            }
        },
        options: {
            types: ["geocode"],
            componentRestrictions: { country: "hk" }, // HK is treated as a country code here
        },
    });

    return (
        <CustomInput ref={ref} name="address.details" label="" multiline />
    );
}