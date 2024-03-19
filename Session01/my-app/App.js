import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello Pabita</Text>
    //   <StatusBar style="auto" />
    // </View>


    <View style={ styles.container } >
      <Text style={{ fontSize: 40, color: 'blue' }}>Hello Pabita</Text>
      <Image source= {require("./assets/favicon.png")} style={styles.image} />

      <View style={{justifyContent: 'space-around' ,flexDirection: 'row'}}>
      <Image source= {require("./assets/icon.png")} style={styles.image} />
      <Image source= {require("./assets/favicon.png")} style={styles.image} />
      </View>

      <StatusBar style="auto" />

    </View>

    // <ScrollView>
    //   <Text>Welcome to my App!</Text>
    //   <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png', }}
    //   style={{ width: 200, height: 200 }} />
    //   <TextInput placeholder="Enter your name"/>
    // </ScrollView>

 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  image: {
    width: 100,
    height: 100
  }
});
