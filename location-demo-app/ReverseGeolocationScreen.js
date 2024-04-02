import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
import * as Location from "expo-location";

const ReverseGeolocationScreen = () => {
    
    const [latInput, setLatInput] = useState("43.7890");
    const [lngInput, setLngInput] = useState("-79.1234");
    const [outputMessage, setOutputMessage] = useState('');

    const performReverseGeoCoding = () => {

        const coords = {latitude : parseFloat(latInput), longitude: parseFloat(lngInput)};

        Location.reverseGeocodeAsync(coords)
        .then( (resultArray) => {
            if (resultArray.length > 0){
                //using only first object from result
                const matchedLocation = resultArray[0];
                setOutputMessage(`Street Number : ${matchedLocation.streetNumber} 
                Street : ${matchedLocation.street}
                City : ${matchedLocation.city}
                Postal Code : ${matchedLocation.postalCode}`);
            }else{
                console.error(`No address found for the given coords`);
                setOutputMessage(`No address found for the given coords`);
            }
        })
        .catch( (err) => {
            console.error(`Unable to perform reverse geocoding : ${err}`);
        })

    }

    return (<View>
        <Text>ReverseGeolocationScreen</Text>

        <TextInput 
            placeholder = "Enter Latitude"
            value = {latInput}
            onChangeText = {setLatInput}
        />

        <TextInput 
            placeholder = "Enter Longitude"
            value = {lngInput}
            onChangeText = {setLngInput}
        />

        <Button title = "Get Address" onPress = {performReverseGeoCoding} />

        <Text>{outputMessage}</Text>

    </View>
    );
}

export default ReverseGeolocationScreen;