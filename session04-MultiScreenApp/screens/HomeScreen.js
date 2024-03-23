import { View, Text } from 'react-native'

const HomeScreen = ( { navigation, route} ) => {

    const {uname} = route.params;

    return (
        <View>
            <Text> HomeScreen </Text>
            <Text> Welcome {JSON.stringify(uname)}</Text>
        </View>
    );

}

export default HomeScreen;