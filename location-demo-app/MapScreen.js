
import { useState, useRef } from "react";
import { View, Text, StyleSheet, Dimensions, Button } from "react-native";
import * as Location from "expo-location";
import MapView, {Marker} from 'react-native-maps';

const MapScreen = () => {
    const [currRegion, setCurrRegion] = useState({
        latitude: 43.6790048,
        longitude: -79.2980967,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      });
    
    const [currCoord, setCurrCoord] = useState({});

    //a variable to programmatically access the MapView element
    const mapRef = useRef(null);
    
    const mapMoved = (updatedRegion) =>{
        console.log(`Map moved to : ${updatedRegion}`);
        setCurrRegion(updatedRegion);
    }

    const moveToDeviceLocation = () => {
        Location.getCurrentPositionAsync({})
        .then((location) => {

          const coords = {lat: location.coords.latitude, lng: location.coords.longitude};
          setCurrCoord(coords);

          const region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
          }
          setCurrRegion(region);

          mapRef.current.animateCamera({center: coords}, 2000);
        })
        .catch( (err) => {console.log(`unable to get position for map : ${err}`);})
      }

    return (<View>
        <Text>Map Screen</Text>

        <MapView
          style= {{width: Dimensions.get('window').width, height: 500}}
          initialRegion={currRegion}
          onRegionChangeComplete={mapMoved}
          ref={mapRef}
        >

            <Marker 
            coordinate={currCoord} 
            title="1 Main Street, Toronto" 
            description='Center of Toronto'></Marker>

        </MapView>
  
        <Button title='Move to Device Location' onPress={moveToDeviceLocation}/>

    </View>
    );
}

export default MapScreen;