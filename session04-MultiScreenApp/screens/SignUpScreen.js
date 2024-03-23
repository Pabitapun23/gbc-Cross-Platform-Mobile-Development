import { View, Text, Button } from 'react-native'

const SignUpScreen = ( { navigation, route} ) => {

    const onCreateAccount = () => {
        // collect profile information
        // go to home screen
        navigation.navigate('Home')
    }

    return (
        <View>
            <Text> SignUpScreen </Text>
            <Button title='Create an account' onPress={onCreateAccount} />
        </View>
    );

}

export default SignUpScreen;