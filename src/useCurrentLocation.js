import { useState } from "react";

export function useCurrentLocation(){
    const [location, setLocation] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    function getLocation(){
        try{
            setLoading(true)
            navigator.geolocation.getCurrentPosition((position)=>{
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude
                setLocation([latitude, longitude])
            })
        } catch(error){
            setError(error);
            setLocation(null);
        } finally {
            setLoading(false)
        }
}

    return {
        location: location,
        getLocation: getLocation,
        error: error,
        loading: loading
    }
}