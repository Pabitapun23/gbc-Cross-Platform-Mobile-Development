import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";
import * as Location from "expo-location";

const WatchForChangesScreen = () => {

    const[outputMessage, setOutputMessage] = useState('');
    const [locationSubscription, setLocationSubscription] = useState(null);

    const positionUpdateReceived = (location) => {
        if (location !== undefined || location !== null){
            setOutputMessage(`Lat : ${location.coords.latitude} \nLng : ${location.coords.longitude}`);
            //update the map to show the current location
        }else{
            setOutputMessage("Unable to received location update");
        }
    }

    const onStartPressed = () => {
        Location.watchPositionAsync({accuracy: Location.Accuracy.High, timeInterval: 5}, positionUpdateReceived )
        .then((subscription) => {
            setLocationSubscription(subscription);
            console.log("app is subscribed to location changes");
        })
        .catch( (err) => {
            console.error(`Unable to watch location changes : ${err}`);
        })
    }

    const onStopPressed = () => {
        if (locationSubscription === null){
            console.log("app doesn't have any active subscriptions for location");
        }else{
            //stop location subscription
            locationSubscription.remove();
            setLocationSubscription(null);
        }
    }

    return (<View>
        <Text>WatchForChangesScreen</Text>

        <Button title = "Start getting location updates" onPress={onStartPressed}/>
        <Button title = "Stop getting location updates" onPress={onStopPressed}/>

        <Text> ${outputMessage} </Text>

    </View>
    );
}

export default WatchForChangesScreen;