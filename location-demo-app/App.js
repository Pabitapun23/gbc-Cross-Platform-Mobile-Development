import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './MapScreen';
import GetCurrentLocationScreen from './GetCurrentLocationScreen';
import ForwardGeolocationScreen from './ForwardGeolocationScreen';
import ReverseGeolocationScreen from './ReverseGeolocationScreen';
import WatchForChangesScreen from './WatchForChangesScreen';

//npm install @react-navigation/bottom-tabs
//expo install expo-location
//expo install react-native-maps

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Get Location" component={GetCurrentLocationScreen} />
        <Tab.Screen name="Forward Geolocation" component={ForwardGeolocationScreen} />
        <Tab.Screen name="Reverse Geolocation" component={ReverseGeolocationScreen} />       
        <Tab.Screen name="Watch for Changes" component={WatchForChangesScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
