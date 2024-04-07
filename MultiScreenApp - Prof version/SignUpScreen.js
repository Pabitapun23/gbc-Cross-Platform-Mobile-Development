import { Button } from 'react-native';
import {View, Text} from 'react-native';

const SignUpScreen = ( {navigation, route} ) => {

    const onCreateAccount = () => {
        //collect profile information

        //go to home screen
        navigation.navigate('Home')
    }

    return(
        <View>
            <Text> Sign Up Screen</Text>
            <Button title = "create account" onPress={onCreateAccount}/>
        </View>
    );
}

export default SignUpScreen;