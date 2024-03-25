import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import CalculatorForm from './screens/CalculatorForm';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EV Savings Calculator</Text>

      <CalculatorForm />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 50,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});
