import {View, Text} from 'react-native';

const HomeScreen = ( {navigation, route} ) => {

    const {uname} = route.params;
    // const {pwd} = route.params;

    return(
        <View>
            <Text> Home Screen</Text>

            <Text> Welcome {JSON.stringify(uname)}</Text>
        </View>
    );
}

export default HomeScreen;