import { StyleSheet, Image, Text, View, Pressable, Button, TextInput, Dimensions, ScrollView } from 'react-native';
import { useState, useEffect, useRef} from "react"

// 1. TODO Import Map Library
// 2. (optional): Initial array of markers
import * as Location from "expo-location";
import MapView, {Marker} from 'react-native-maps';


export default function MapScreen() {    
    // current region - lat and lng from ui
    const [latFromUI, setLatFromUI] = useState("37.747830")
    const [lngFromUI, setLngFromUI] = useState("-122.494750")

    // current coordinates
    const [currCoord, setCurrCoord] = useState({});


    //a variable to programmatically access the MapView element
    const mapRef = useRef(null);
    
    const mapMoved = (updatedRegion) =>{
        console.log(`Map moved to : ${updatedRegion}`);
        setLatFromUI(updatedRegion.latitude);
        setLngFromUI(updatedRegion.longitude);
    }

    const addMarker = () => {
        Location.getCurrentPositionAsync({})
        .then((location) => {

          const coords = {lat: location.coords.latitude, lng: location.coords.longitude};
          setCurrCoord(coords);

          const regionLat = location.coords.latitude
          const regionLng = location.coords.longitude

          setLatFromUI(regionLat)
          setLngFromUI(regionLng)

        //   const region = {
        //     latitude: location.coords.latitude,
        //     longitude: location.coords.longitude,
        //     latitudeDelta: 0.005,
        //     longitudeDelta: 0.005
        //   }

        
        //   setCurrRegion(region);
        

          mapRef.current.animateCamera({center: coords}, 2000);
        })
        .catch( (err) => {console.log(`unable to get position for map : ${err}`);})
      }

    return (
        <ScrollView>
            <View style={styles.container}>

            <Text style={{fontSize:18, fontWeight:"bold"}}>Map</Text>

            {/* 3. MapView */}
            <MapView
            style= {{width: '100%', height: 500}}
            initialRegionLat={latFromUI}
            initialRegionLng={lngFromUI}
            onRegionChangeComplete={mapMoved}
            ref={mapRef} >


            {/* 4. Marker */}
            <Marker 
            coordinate={currCoord} 
            title="1 Main Street, Toronto" 
            description='Center of Toronto'></Marker>

        </MapView>


            {/* ui for adding a marker */}
            <Text style={{fontSize:18, fontWeight:"bold", marginTop:20}}>
                Add a Marker
            </Text>                 
            <TextInput style={styles.tb} keyboardType="numeric" value={latFromUI} onChangeText={setLatFromUI} placeholder="Enter latitude"/>  
            <TextInput style={styles.tb} keyboardType="numeric" value={lngFromUI} onChangeText={setLngFromUI} placeholder="Enter longitude"/>  
            <Pressable onPress={addMarker} style={styles.btn}>
                <Text style={styles.btnLabel}>Add Marker</Text>
            </Pressable>
            
        </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:20
    },
    map: {
        height:"50%",
        width:"100%",                 
    },
    btn: {
        borderWidth:1,
        borderColor:"#141D21",
        borderRadius:8,
        paddingVertical:16,
        marginVertical:10
    }, 
    btnLabel: {
        fontSize:16,
        textAlign:"center"
    }, 
    tb: {
        width:"100%",   
        borderRadius:5,
        backgroundColor:"#efefef",
        color:"#333",
        fontWeight:"bold", 
        paddingHorizontal:10,
        paddingVertical:15,
        marginVertical:10,       
    },
});
