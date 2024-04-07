import { StyleSheet, View, Text } from "react-native";  

const FirstComponent = () => {
    return(
        <View style={firstStyles.container}>
            <Text style={firstStyles.textStyle}> This is FirstComponent </Text>
        </View>
    );
}

const firstStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor : 'teal',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    textStyle : {
        fontSize: 30,
        color: 'snow',
        fontStyle: 'italic',
        fontWeight : 'bold',
    },
});

export default FirstComponent;