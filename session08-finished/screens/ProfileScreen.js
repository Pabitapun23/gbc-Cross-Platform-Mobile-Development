import { useState, useEffect } from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';

import { auth, db } from '../firebaseConfig';
import { collection, getDoc, doc } from "firebase/firestore";

const HomeScreen = () => {

    const [profileForUI, setProfileForUI] = useState(" ARE YOU LOGGED IN?!!")

    useEffect(()=>{
        console.log("Screen has loaded, attempting to get user profile")
        getUserProfile()
    },[])


    const getUserProfile = async () => {
        // 1. check if user is logged in
        if (auth.currentUser === null) {
            alert("Sorry, no user is logged in.")
        }
        else {       
            // 2. if yes, try to get the user profile from the db                    
            const docRef = doc(db, "userProfiles", auth.currentUser.uid)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                console.log("A user profile was found")
                alert(JSON.stringify(docSnap.data()))

                const profileInfo = docSnap.data()
                const output = `
                    User id: ${auth.currentUser.uid}, Has Pet: ${profileInfo.hasPet}, Income: ${profileInfo.income}
                `
                setProfileForUI(output)
            }
            else {
                alert("This person has no user profile")
            }
        }        
    }

    const btnPressed = () => {
        // write code to check if there is a logged in user.
        if (auth.currentUser === null) {
            alert("Sorry, no user is logged in.")
        }
        else {                            
            alert(`Yes, there is a user: ${auth.currentUser.uid}`)
        }        
    }

    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>Your Profile</Text>
            <Text>You must be logged in to view this page!</Text>

            <Pressable style={styles.btn}>
                <Text style={styles.btnLabel} onPress={btnPressed}>Check Login Status</Text>
            </Pressable>

            <Text>
                { profileForUI }
            </Text>
            
        </View>
    );
}

const styles = StyleSheet.create({   
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:20,
      }, 
    btn: {
        borderWidth:1,
        borderColor:"#141D21",
        borderRadius:8,
        paddingVertical:16,
        marginVertical:10
    }, 
    btnLabel: {
        fontSize:16,
        textAlign:"center"
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
    formLabel: {
        fontSize:16,
    },
    headerText: {
        fontSize:20, 
        fontWeight:"bold", 
        marginVertical:10
    }
});

export default HomeScreen;