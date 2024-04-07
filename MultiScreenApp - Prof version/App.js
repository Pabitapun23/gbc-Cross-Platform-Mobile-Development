import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import HomeScreen from './HomeScreen';
import SignUpScreen from './SignUpScreen';

//to obtain instance of navigation stack
const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn'>
        <Stack.Screen component={SignInScreen} name="SignIn"></Stack.Screen>
        <Stack.Screen component={SignUpScreen} name="SignUp"></Stack.Screen>
        <Stack.Screen component={HomeScreen} name="Home"></Stack.Screen>
      </Stack.Navigator>
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
