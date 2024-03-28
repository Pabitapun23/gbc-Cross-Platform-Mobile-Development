import { useState, useEffect } from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';

const SignInScreen = () => {

    const [usernameFromUI, setUsernameFromUI] = useState("peter@gmail.com");
    const [passwordFromUI, setPasswordFromUI] = useState("11112222");

    const onLoginClicked = () => {
        //verify credentials

        //go to home screen
        alert("Login success!")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.headerText}> 
            Login Screen</Text>

            <TextInput
                style={styles.tb}
                placeholder="peter@gmail.com"
                textContentType="emailAddress"
                autoCapitalize="none"                
                value={usernameFromUI}
                onChange={setUsernameFromUI}
            />
            <TextInput
                style={styles.tb}
                placeholder="Enter your password"
                secureTextEntry={true}
                autoCapitalize="none"                
                value={passwordFromUI}
                onChangeText={setPasswordFromUI}
            />

            <Pressable style={styles.btn}>
                <Text style={styles.btnLabel} onPress={onLoginClicked}>Login</Text>
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

export default SignInScreen;