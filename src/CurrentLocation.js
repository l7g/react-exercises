import { useEffect } from "react";
import { useCurrentLocation } from "./useCurrentLocation";

export function CurrentLocation(){
    const {location, getLocation, error, loading} = useCurrentLocation()

    useEffect(()=> {
        getLocation()
    })

    return(
        <div>
            {error && <p>We couldn't find your location</p>}
            {loading && <p>Loading...</p>}
            {location && <p>latitude: {location[0]} - longitude: {location[1]} </p>}
        </div>
    )
}