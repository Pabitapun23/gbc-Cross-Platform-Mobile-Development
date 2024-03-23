import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';

// to obtain instance of Navigation Stack
const Stack = createStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName='SignIn' >
        <Stack.Screen component={SignInScreen} name='SignIn'></Stack.Screen>
        <Stack.Screen component={SignUpScreen} name='SignUp'></Stack.Screen>
        <Stack.Screen component={HomeScreen} name='Home'></Stack.Screen>
      </Stack.Navigator>
      
    </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 80
  },
});
