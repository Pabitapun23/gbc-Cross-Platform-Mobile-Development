import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import SecondComponent from './Second';
import FirstComponent from './First';
import UserInputComponents from './UserInput';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const App = () => {

  const fullName = (firstName, lastName) => {return firstName + " " + lastName};
  const a = 99292;
  const sayHello = (name) => {return `Hello from ${name}`};
  const classList = ["Alex", "Ameya", "Aratrika", "Arnulfo", "Chintan"];

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true} showsHorizontalScrollIndicator={true}>
        <Text style={styles.title}>Introduction to Components</Text>

        <Text>This is read-only text using Text component</Text>

        <View style={styles.innerView}>
          <Text style={styles.simpleText}> This inner View 1</Text>
        </View>

        <View style={styles.innerView}>
          <Text style={styles.simpleText}>{fullName('Jack', 'Dorsi')}</Text>

          <Text style={styles.simpleText}> JSX </Text>
          <Text style={styles.simpleText}> a = {a} </Text>
          <Text style={styles.simpleText}> a.toFixed(2) = {a.toFixed(2)} </Text>
          <Text style={styles.simpleText}> sayHello("JK") = {sayHello("JK")} </Text>
          <Text style={styles.simpleText}> {classList[1]}</Text>

          {
            classList.map( (eachName, index) => {return <Text key={index}> {eachName} index={index}</Text>})
          }

          {/* <FirstComponent/> */}

        </View>

        <SecondComponent/>
        <SecondComponent/>
        <SecondComponent/>


        <FirstComponent/> 

        <UserInputComponents/>

      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 50,
    margin: 8,
  },
  title:{
    fontSize : 30,
    color: 'red',
  },
  simpleText : {
    fontStyle : 'italic',
    fontSize : 25,
    color : 'blue',
    color: 'snow',
  },
  innerView:{
    width: '100%',
    height: 350,
    backgroundColor: 'steelblue',
    margin: 10,
  },
  innerView:{
    width: 400,
    height: 150,
    backgroundColor: 'steelblue',
  },
});


export default App;