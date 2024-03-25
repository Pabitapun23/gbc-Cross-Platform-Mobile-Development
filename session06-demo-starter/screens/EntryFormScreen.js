import { StyleSheet, Text, View, TextInput, Switch, Pressable} from 'react-native';
import {useState} from "react"
export default function EntryFormScreen() {

    // form fields
    const [nameFromUI, setNameFromUI] = useState("")
    const [gpaFromUI, setGPAFromUI] = useState("")
    const [isPGFromUI, setIsPGFromUI] = useState(true)

    const buttonPressed = () => {
        // convert gpa to number
        const gpa = parseFloat(gpaFromUI)
        // create object to insert

        // insert into database

        // display success message
        alert("done!")
    }

    return(
        <View style={styles.container}>   
            <TextInput placeholder="Enter name" onChangeText={setNameFromUI} value={nameFromUI} style={styles.tb}/>
            <TextInput placeholder="Enter gpa" keyboardType="numeric" onChangeText={setGPAFromUI} value={gpaFromUI} style={styles.tb}/>
            
            
            <Text>Is a post graduate student?</Text>
            <Switch onValueChange={setIsPGFromUI} value={isPGFromUI} style={{alignSelf:"flex-start"}}/>
            
            <Pressable onPress={buttonPressed} style={styles.btn}>
                <Text style={styles.btnLabel}>Insert to database</Text>
            </Pressable>

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

