import { StyleSheet, Text, View, Pressable, TextInput} from 'react-native';

import { useState } from "react"

export default function StudentListScreen() {

    // state variable for the text box
    const [nameFromUI, setNameFromUI] = useState("")

    // state variable to store students
    

    // button click handler
    const btnGetStudentsPressed = () => {
        alert("OK!")

        // retrieve data from firestore

        // save data to a state variable

        // when the state variable updates, the list will auto update
    }
    


    return(
        <View style={styles.container}>   
           <TextInput placeholder="Enter name" onChangeText={setNameFromUI} text={nameFromUI} style={styles.tb}/> 
           <Pressable style={styles.btn} onPress={btnGetStudentsPressed}>
                <Text style={styles.btnLabel}>Get from Database</Text>
           </Pressable>

           {/* // List UI goes here */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',      
      padding:20,
    },
    tb: {
        width:"100%",    
        borderRadius:5,
        backgroundColor:"#efefef",
        color:"#333",
        fontWeight:"bold",  
        paddingHorizontal:10,
        paddingVertical:15,
        marginVertical:10,        
    }, 
    btn: {
        borderWidth:1, 
        borderColor:"#141D21", 
        borderRadius:8, 
        paddingVertical:16, 
        marginVertical:20
    }, 
    btnLabel: {
        fontSize:16, 
        textAlign:"center"
    }
});

