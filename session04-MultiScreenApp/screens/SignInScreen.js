import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

const SignInScreen = ( { navigation, route} ) => {

    const [username, setUsername] = useState('body')

    const onLoginClicked = () => {
        // Navigate to Home
        navigation.navigate('Home', {uname: username})
    }

    const onRegisterClicked = () => {
        // goto SignUp Screen
        navigation.navigate('SignUp')
    }

    return (
        <View style={styles.container}>
            <Text style = {styles.title}> Sign In Screen </Text>

            {/* create a text field to allow user to input username */}

            <TextInput style={styles.inputStyle}
                placeholder='username'
                textContentType='emailAddress'
                autoCapitalize='none'
                returnKeyType='Go'
                value={username}
                onChange={setUsername} />

            <Button title='Login' onPress={onLoginClicked} style={styles.button}/>
            <Button title='Register' onPress={onRegisterClicked} style={styles.button}/>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    inputStyle: {
        width: '100%',
        height: 50,       
        borderColor : 'orangered',
        borderWidth: 1,
        padding: 5,
        marginTop: 20,
    },
    title: {
        fontSize: 30,
        color: 'green',
        fontWeight: 'bold'      
    },
    button: {
        fontSize: 20,
        // backgroundColor: '#5533ff',
        fontWeight: 'bold',
        color: '#5533ff',
        width: 30, 
        height: 30, 
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'

    },
});

export default SignInScreen;

