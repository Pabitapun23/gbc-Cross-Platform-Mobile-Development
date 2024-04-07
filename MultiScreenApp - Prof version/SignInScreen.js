import { useState } from 'react';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import {View, Text, StyleSheet} from 'react-native';

const SignInScreen = ( {navigation, route} ) => {

    const [username, setUsername] = useState('Boby');

    const onLoginClicked = () => {
        //verify credentials

        //go to home screen
        // navigation.navigate('Home');

        navigation.navigate('Home', {uname: username});
    }
    const onRegisterClicked = () => {
        //go to signup screen
        navigation.navigate('SignUp');
    }

    return(
        <View>
            <Text> Sign In Screen</Text>

            {/* create a text field to allow user to input username */}

            <TextInput
                style={styles.inputStyle}
                placeholder='username'
                textContentType='emailAddress'
                autoCapitalize='none'
                returnKeyType='Go'
                value={username}
                onChange={setUsername}
            />

            <Button title = 'Login' onPress={onLoginClicked}/>
            <Button title = 'Register' onPress={onRegisterClicked}/>
        </View>
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        margin : 8,
        borderColor : 'orangered',
        borderWidth: 1,
        padding: 5,
    }
});

export default SignInScreen;