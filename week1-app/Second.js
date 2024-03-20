import { StyleSheet, View, Text } from "react-native";  
import FirstComponent from "./First";

const SecondComponent = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}> This is Second Component </Text>

            <FirstComponent/>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor : 'violet',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    textStyle : {
        fontSize: 30,
        color: 'saddlebrown',
        fontStyle: 'italic',
        fontWeight : 'bold',
    },
});

export default SecondComponent;