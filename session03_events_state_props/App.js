import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ShoppingHome from './screens/ShoppingHome';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Session 03 - Events, State & Props</Text>

      <ShoppingHome  /> 
      <StatusBar style="auto" />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
    margin: 10,
    padding: 10
  },
  title: {
    fontSize: 20,
    color: 'indigo',
    fontWeight: 'bold'
  }
});
