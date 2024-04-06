import { useState } from "react";
import { TextInput, View, StyleSheet, Button, Alert, Text, Pressable } from "react-native";

const SignInScreen = ({navigation, route}) => {
    const [username, setUsername] = useState('test');
    const [password, setPassword] = useState('test');

    const onSignInClicked = () => {
        
    }

    const onSignUpClicked = () => {
        //go to sign up screen
        navigation.navigate('SignUp');
    }

    return(
        <View style={styles.sectionContainer}>
            {/* <Text> Sign In Screen </Text> */}
            <TextInput 
                style={styles.inputStyle}
                placeholder="enter username"
                textContentType="emailAddress"
                autoCapitalize="none"
                returnKeyType="next"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput 
                style={styles.inputStyle}
                placeholder="enter password"
                textContentType="password"
                autoCapitalize="none"
                returnKeyType="next"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />

            <Pressable style={styles.buttonStyle} onPress={onSignInClicked}>
                <Text style={styles.buttonTextStyle}>Sign In</Text>
            </Pressable>

            <Pressable style={styles.buttonStyle} onPress={onSignUpClicked}>
                <Text style={styles.buttonTextStyle}>Sign Up</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer:{
        marginTop: 32,
        paddingHorizontal: 24,
    },
    inputStyle: {
        height: 50,
        margin: 8,
        borderColor: 'orangered',
        borderWidth: 1,
        padding: 5,
    },
    buttonStyle: {
        height: 50,
        margin: 10,
        padding: 5,
        backgroundColor:'orangered',
        justifyContent:'center',
        alignItems:'center',
    },
    buttonTextStyle: {
        fontWeight: 'bold',
        color:'#fff',
    }
});

export default SignInScreen;