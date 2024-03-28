import { useState, useEffect } from 'react';
import {View, Text, TextInput, StyleSheet, Pressable, Switch} from 'react-native';
import Slider from '@react-native-community/slider';

import {auth, db} from "../firebaseConfig";
import {createUserWithEmailAndPassword} from "firebase/auth";

import {collection, setDoc, doc} from "firebase/firestore";

const SignUpScreen = () => {

    const [usernameFromUI, setUsernameFromUI] = useState("peter@gmail.com");
    const [passwordFromUI, setPasswordFromUI] = useState("11112222");
    const [incomeFromUI, setIncomeFromUI] = useState(400000);
    const [hasPet, setHasPet] = useState(true)

    const onSignupPressed = async () => {
        //verify credentials

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, usernameFromUI, passwordFromUI)
            console.log(`Id of created user is: ${userCredential.user.uid}`)
            // the create will always automatically log the person in as well
            alert(userCredential.user.uid)

            // 1. Create a firestore collection (user profile)
            // 2. after you create the user in firebase.auth,
            // create a corresponding document in the user profiles collection (hasPet, income)
            const profileDataToAdd = {
                hasPet : hasPet,
                income : incomeFromUI
            }
            await setDoc(doc(db, "userProfile", userCredential.user.uid), profileDataToAdd)
            alert("Profile created!!!")
        } catch (err) {
            console.log(err)
            alert(err)
        }

        //go to home screen
        // alert("Login success!")
    }

    // function for updating form fields
    const formChanged = (key, updatedValue) => {
        setUsernameFromUI(updatedValue)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>Create an Account</Text>

            
            {/* email address */}
            <Text style={styles.formLabel}>Enter email address:</Text>
            <TextInput
                style={styles.tb}
                placeholder="peter@gmail.com"
                textContentType="emailAddress"
                autoCapitalize="none"                
                value={usernameFromUI}
                onChange={setUsernameFromUI}
            />

            {/* password */}
            <Text style={styles.formLabel}>Enter a password (min 8 characters):</Text>
            <TextInput style={styles.tb} placeholder="Enter password" 
                value={passwordFromUI}                
                onChangeText={setPasswordFromUI}
            />

            <Text style={styles.formLabel}>Do you have a pet?</Text>
            <Switch value={hasPet} onValueChange={setHasPet} style={{marginVertical:10}}/>
            
            <Text style={styles.formLabel}>What is your annual income?</Text>
            <Text>$100,000-$900,000</Text>
            <Slider
                style={{width: "100%"}}
                minimumValue={100000}
                maximumValue={900000}
                step={50000}
                value={incomeFromUI}
                onValueChange={setIncomeFromUI}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#a5b1c2"
            />


            <Pressable style={styles.btn} onPress={onSignupPressed}>
                <Text style={styles.btnLabel}>Signup</Text>
            </Pressable>
            
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

export default SignUpScreen;