import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import GeolocationScreen from "./screens/GeolocationScreen";
import MapScreen from "./screens/MapScreen";

// npm install @react-navigation/bottom-tabs
// expo install expo-locationn
// expo install react-native-maps

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Geolocation Demo" component={GeolocationScreen} />
        <Tab.Screen name="Map Demo" component={MapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
