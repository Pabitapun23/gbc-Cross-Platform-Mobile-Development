import {
    StyleSheet,
    Text,
    View,
    Pressable,
    TextInput,
    ScrollView,
} from "react-native";
import { useState, useEffect } from "react";

// TODO: Import location library
import * as Location from "expo-location";

export default function GeolocationScreen() {
    // state variables for location
    const [cityFromUI, setCityFromUI] = useState(
        "165 Kendal Avenue, Toronto, Ontario"
    );
    const [latFromUI, setLatFromUI] = useState("43.676410");
    const [lngFromUI, setLngFromUI] = useState("-79.410150");

    // state variables to store results of geocoding
    const [deviceLocation, setDeviceLocation] = useState(null);
    const [currAddress, setCurrAddress] = useState(null);
    const [geocodedCoordinates, setGeocodedCoordinates] = useState(null);

    // helper function to get device location
    const getCurrentLocation = async () => {
        // alert("Getting current location...")
        try {
            // 1. get permissions
            Location.requestForegroundPermissionsAsync()
                .then((result) => {
                    console.log(`Result from permission request: ${result.status}`);

                    if (result.status === "granted") {
                        console.log(`Location permission granted`);

                        //get device location
                        return Location.getCurrentPositionAsync();
                    } else {
                        console.log(`Location permission DENIED`);
                        throw new Error(`User did not grant location permission`);
                    }
                })

                // 2. if permission granted, then get the location
                .then((location) => {
                    console.log(`Location: ${JSON.stringify(location)}`);
                    console.log(`Lat: ${location.coords.latitude}`);
                    console.log(`Lng: ${location.coords.longitude}`);

                    // 3. do something with the retreived location
                    const coords = {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                    };

                    setDeviceLocation(coords);
                });
        } catch (err) {
            console.log(err);
        }
    };

    // helper function to do reverse geocoding (coordinates to address)
    const doReverseGeocode = () => {
        // alert("reverse geocode button clicked");
        try {
            const coordsForReverseGeocoding = {
                latitude: parseFloat(latFromUI),
                longitude: parseFloat(lngFromUI),
            };

            // 0. on android, permissions must be granted
            Location.reverseGeocodeAsync(coordsForReverseGeocoding)
            // 1. do geocoding
            .then((resultArray) => {
                // 2. check if result found
                if (resultArray.length > 0) {
                    // using only first object from the array
                    const matchedLocation = resultArray[0];

                    // 3. do something with results
                    // setCurrAddress(`Street Number: ${matchedLocation.streetNumber}
                    // Street: ${matchedLocation.street}
                    // City: ${matchedLocation.city}
                    // Postal Code: ${matchedLocation.postalCode}`)

                    setCurrAddress(`${matchedLocation.streetNumber}, ${matchedLocation.street}, ${matchedLocation.city}, ${matchedLocation.postalCode}`)
                } else{
                    console.error(`No address found for the given coords`);
                    setCurrAddress(`No address found for the given coords`);
                }
            });
            
            
        } catch (err) {
            console.log(err);
        }
    };

    // helper function to do forward geocoding (address to coordinates)
    const doForwardGeocode = async () => {
        // alert("forward geocode button clicked");
        try {
            // 0. on android, permissions must be granted
            Location.geocodeAsync(cityFromUI) 
            // 1. do geocoding
            .then( (resultArray) => {

                // 2. Check if a result is found
                if (resultArray.length > 0) {

                    const matchedLocation = resultArray[0]

                    // 3. do something with results
                    setGeocodedCoordinates(`Latitude: ${matchedLocation.latitude}\n Longitude: ${matchedLocation.longitude} `)
                } else{
                    console.error(`No coords found for the given address`);
                    setGeocodedCoordinates(`No coords found for the given address`);
                }

            })
           
           
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* Getting Current location          */}
            <Pressable style={styles.btn} onPress={getCurrentLocation}>
                <Text style={styles.btnLabel}>Get Current Location</Text>
            </Pressable>
            <Text>Your location is {JSON.stringify(deviceLocation)}</Text>

            {deviceLocation !== null && (
                <View style={{ marginVertical: 10 }}>
                    <Text>
                        Device latitude:
                        <Text style={{ color: "blue" }}> {deviceLocation.latitude}</Text>
                    </Text>
                    <Text>
                        Device longitude:
                        <Text style={{ color: "blue" }}> {deviceLocation.longitude}</Text>
                    </Text>
                </View>
            )}

            {/* Reverse Gecoding */}

            <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20 }}>
                Reverse Gecoding
            </Text>
            <TextInput
                style={styles.tb}
                keyboardType="numeric"
                value={latFromUI}
                onChangeText={setLatFromUI}
                placeholder="Enter latitude"
            />
            <TextInput
                style={styles.tb}
                keyboardType="numeric"
                value={lngFromUI}
                onChangeText={setLngFromUI}
                placeholder="Enter longitude"
            />
            <Pressable onPress={doReverseGeocode} style={styles.btn}>
                <Text style={styles.btnLabel}>Do Reverse Geocode</Text>
            </Pressable>

            <View style={{ marginVertical: 10 }}>
                <Text>
                    Street Address:
                    {/* <Text style={{ color: "blue" }}> 555 Main Street</Text> */}
                    <Text style={{ color: "blue" }}> {currAddress} </Text>
                </Text>
            </View>

            {/* Forward Geocoding */}

            <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20 }}>
                Forward Geocoding
            </Text>
            <TextInput
                style={styles.tb}
                value={cityFromUI}
                onChangeText={setCityFromUI}
                placeholder="Enter address"
            />

            <Pressable onPress={doForwardGeocode} style={styles.btn}>
                <Text style={styles.btnLabel}>Get Coordinates</Text>
            </Pressable>

            <View style={{ marginVertical: 10 }}>
                <Text> {geocodedCoordinates} </Text>        
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    btn: {
        borderWidth: 1,
        borderColor: "#141D21",
        borderRadius: 8,
        paddingVertical: 16,
        marginVertical: 10,
    },
    btnLabel: {
        fontSize: 16,
        textAlign: "center",
    },
    tb: {
        width: "100%",
        borderRadius: 5,
        backgroundColor: "#efefef",
        color: "#333",
        fontWeight: "bold",
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginVertical: 10,
    },
});
