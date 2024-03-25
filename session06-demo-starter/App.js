import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import ListDemoScreen from './screens/ListDemoScreen';
import EntryFormScreen from './screens/EntryFormScreen';
import StudentListScreen from './screens/StudentListScreen';

// icons
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size })=> {
            if (route.name == "List Demo") {              
              return <MaterialIcons name="format-list-bulleted" size={24} color={color} />
            }
            if (route.name === "Student List") {              
              return <MaterialIcons name="person-search" size={24} color={color} />
            }
            if (route.name === "Entry Form") {              
              return <MaterialIcons name="crop-square" size={24} color={color} />
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      > 
        <Tab.Screen name="List Demo" component={ListDemoScreen} />         
        <Tab.Screen name="Entry Form" component={EntryFormScreen} />
        <Tab.Screen name="Student List" component={StudentListScreen} />        
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
