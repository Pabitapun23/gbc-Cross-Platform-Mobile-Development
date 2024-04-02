// GetCurrentLocationScreen
import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";
import * as Location from "expo-location";

const GetCurrentLocationScreen = () => {

    const [currentCoords, setCurrentCoords] = useState({});

    const getDeviceLocation = () => {
        //request user permission to access device location
        Location.requestForegroundPermissionsAsync()
        .then((result) => {
            console.log(`result from permission request : ${result.status}`);

            if (result.status === 'granted'){
                console.log(`Location permission granted`);

                //get device location
                return Location.getCurrentPositionAsync();

            }else{
                console.log(`Location permission DENIED`);
                throw new Error(`User did not grant location permission`);
            }
        })
        .then((location) => {
            console.log(`location : ${JSON.stringify(location)}`);
            console.log(`lat : ${location.coords.latitude}`);
            console.log(`lng : ${location.coords.longitude}`);

            const coords = {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }

            setCurrentCoords(coords);
        })
        .catch( (err) => {console.error(`Error while requesting location or permission ${err}`);})
        
    }

    return (<View>
        <Text>GetCurrentLocationScreen</Text>
        <Button title="Get device location" onPress={getDeviceLocation} />
        <Text>Device Lcoation : ${JSON.stringify(currentCoords)}</Text>
    </View>
    );
}

export default GetCurrentLocationScreen;