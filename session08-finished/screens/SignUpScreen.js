import { useState, useEffect } from 'react';
import {View, Text, TextInput, StyleSheet, Pressable, Switch} from 'react-native';
import Slider from '@react-native-community/slider';

import {auth, db} from "../firebaseConfig"
import {createUserWithEmailAndPassword} from "firebase/auth"

import { collection, setDoc, doc } from "firebase/firestore";



const SignUpScreen = () => {

    const [formFieldData, setFormFieldData] = useState(
        {
            email: "alex@yahoo.com", 
            password:"00005555",
            hasPet:false,
            income:700530
        }
    )

    const onSignupPressed =  async () => {
        // read the data from the state variables
        // const output = `
        //     Email: ${formFieldData.email}
        //     Pasword: ${formFieldData.password}
        //     Has a pet? ${formFieldData.hasPet}
        //     Income Level: ${formFieldData.income}
        // `
        // alert(output)

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formFieldData.email, formFieldData.password)
            console.log(`Id of created user is: ${userCredential.user.uid}`)
            // the create will always automaitcally log the person in as well
            alert(userCredential.user.uid)

            // 1. create a firestore collection (userprofiles)
            // 2. after you create the user in firebase auth
            // create a corresponding document in the userprofiles collection (hasPet, income)
            const profileDataToAdd = {
                hasPet: formFieldData.hasPet,
                income: formFieldData.income
            }
            await setDoc(doc(db, "userProfiles", userCredential.user.uid), profileDataToAdd)
            alert("Profile created!!!!")


        } catch (err) {
            console.log(err)
            alert(err)
        }

    }



    // FUNCTION FOR UPDATING FORM FIELDS    
    const formChanged = (key,updatedValue) => {
        const temp = {...formFieldData}
        // temp.password = abc
        // temp["password"] = abc
        temp[key] = updatedValue
        setFormFieldData(temp)
        
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
                value={formFieldData.email}
                onChangeText={
                    (abc)=>{ formChanged("email", abc) }
                }
            />
            {/* password */}
            <Text style={styles.formLabel}>Enter a password (min 8 characters):</Text>
            <TextInput style={styles.tb} placeholder="Enter password" 
                value={formFieldData.password}                
                onChangeText={
                    (abc)=>{ formChanged("password", abc) }
                }
            />

            <Text style={styles.formLabel}>Do you have a pet?</Text>
            <Switch 
                value={formFieldData.hasPet} 
                onValueChange={
                    (abc)=>{ formChanged("hasPet", abc) }
                } 
                style={{marginVertical:10}}/>
            
            <Text style={styles.formLabel}>What is your annual income?</Text>
            <Text>$100,000-$900,000</Text>
            <Slider
                style={{width: "100%"}}
                minimumValue={100000}
                maximumValue={900000}
                step={50000}
                value={formFieldData.income}
                onValueChange={
                    (abc)=>{ formChanged("income", abc) }
                }
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#a5b1c2"
            />

            <Pressable style={styles.btn}>
                <Text style={styles.btnLabel} onPress={onSignupPressed}>Signup</Text>
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