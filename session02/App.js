import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';  

// npm install @react-native-picker/picker --save

export default function App() {
  state = {user: ''}
  updateUser = (user) => {
    this.setState({ user: user})
  }

  return (
    <View>
      <Text>Session 02</Text>
      {/* <StatusBar style="auto" /> */}

      <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
        <Picker.Item label = "Label1" value = "value1" />
        <Picker.Item label = "Label2" value = "value2" />
        <Picker.Item label = "Label3" value = "value3" />
      </Picker>

      <Text style = {styles.Text}>{this.state.user}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 30, 
    color: 'red'
  }

});
