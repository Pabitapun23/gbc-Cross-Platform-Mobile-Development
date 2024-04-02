import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
import * as Location from "expo-location";

const ForwardGeolocationScreen = () => {

    const [address, setAddress] = useState('1 Main street, Toronto');
    const [outputMessage, setOutputMessage] = useState('');

    const performForwardGeoCoding = () => {

        Location.geocodeAsync(address)
        .then( (resultArray) => {
            if (resultArray.length > 0){
                //using only first object from result
                const matchedLocation = resultArray[0];
                setOutputMessage(`Lat : ${matchedLocation.latitude} \nLng : ${matchedLocation.longitude}`);
            }else{
                console.error(`No coords found for the given address`);
                setOutputMessage(`No coords found for the given address`);
            }
        })
        .catch( (err) => {
            console.error(`Unable to perform forward geocoding : ${err}`);
        })

    }

    return (<View>
        <Text>ForwardGeolocationScreen</Text>

        <TextInput 
            placeholder = "Enter street address"
            value = {address}
            onChangeText = {setAddress}
        />

        <Button title = "Get Coords" onPress = {performForwardGeoCoding} />

        <Text>{outputMessage}</Text>

    </View>
    );
}

export default ForwardGeolocationScreen;