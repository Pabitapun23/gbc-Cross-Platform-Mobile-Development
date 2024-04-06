import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function App() {
  return (
    <SafeAreaView style={{height:"100%", backgroundColor:"#D0EDC0"}}> 

      {/* part 1: logo */}
      <View style={{          
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center"
      }}>
        <Image source={require("./assets/dayzer-logo.png")}/>
        <Ionicons name="ios-flash-outline" size={40} color="black" />
      </View>

      {/* part 2: text and image */}
      <View style={{alignItems:"center", flex:1, justifyContent:"space-around"}}>
        <Text style={{fontSize:36, fontWeight:"bold", textAlign:"center"}}>To simplify the way you work</Text>
        <Image 
          source={require("./assets/shape-transparent.png")}
          style={{height:300, width:300, resizeMode:"contain"}}  
        />
        <Text style={{fontSize:18, textAlign:"center",}}>Controlling deliveries in a hassle free way.</Text>
      </View>

      {/* part 3: button */}
      {/* Button = native button */}
      {/* Pressable is an element that responds to clicks (button) and
      it can be styled */}
      <Pressable style={{backgroundColor:"#222", paddingVertical:18, borderRadius:10}}>
        <Text style={{color:"white", textAlign:"center", fontSize:18, fontWeight:"bold"}}>Get Free Trial</Text>
      </Pressable>
    </SafeAreaView>    
  )
}


