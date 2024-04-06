import { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, TextInput, Pressable} from "react-native";

const HomeScreen = ({navigation, route}) => {

    useEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <Pressable style={styles.buttonStyle} onPress={() => console.log("logging out")}>
                <Text style={styles.buttonTextStyle}>Log Out</Text>
            </Pressable>
          ),
        });
      }, [navigation]);

    return(
        <View style={styles.sectionContainer}>

        </View>
    );
}

const styles = StyleSheet.create({
    inputStyle : {
        height: 50,
        margin: 10,
        padding: 5,
        borderColor: 'orangered',
        borderWidth: 1,
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


export default HomeScreen;