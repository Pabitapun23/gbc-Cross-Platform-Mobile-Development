import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// import screens
import HomeScreen from './Screens/HomeScreen';
import VideoDetailsScreen from './Screens/VideoDetailsScreen';
import FavouriteListScreen from './Screens/FavouriteListScreen';

const Stack = createStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0064B1"
          },
          headerTintColor: "#fff"
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Video Details" component={VideoDetailsScreen} />
        <Stack.Screen name="Favourites" component={FavouriteListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

