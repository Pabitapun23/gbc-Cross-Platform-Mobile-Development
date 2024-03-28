import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignInScreen from './screens/SignInScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignUpScreen from './screens/SignUpScreen';

//to obtain instance of navigation stack
const Tab = createBottomTabNavigator();

export default function App() {
  return (    
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen component={SignUpScreen} name="SignUp" options={{headerStyle:{backgroundColor:"#DC267F"}, headerTintColor:"#fff"}}></Tab.Screen>
        <Tab.Screen component={SignInScreen} name="SignIn" options={{headerStyle:{backgroundColor:"#E69F00"}, headerTintColor:"#fff"}}></Tab.Screen>        
        <Tab.Screen component={ProfileScreen} name="Profile" options={{headerStyle:{backgroundColor:"#648FFF"}, headerTintColor:"#fff"}}></Tab.Screen>
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
