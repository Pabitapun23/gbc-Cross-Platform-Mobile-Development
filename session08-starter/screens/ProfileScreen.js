import { useState, useEffect } from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';

const HomeScreen = () => {

    const btnPressed = () => {
        // write code to check if there is a logged in user.
        alert("ok")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>Your Profile</Text>
            <Text>You must be logged in to view this page!</Text>

            <Pressable style={styles.btn}>
                <Text style={styles.btnLabel} onPress={btnPressed}>Check Login Status</Text>
            </Pressable>
            
        </View>
    );
}

const styles = StyleSheet.create({   
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:20,
      }, 
    btn: {
        borderWidth:1,
        borderColor:"#141D21",
        borderRadius:8,
        paddingVertical:16,
        marginVertical:10
    }, 
    btnLabel: {
        fontSize:16,
        textAlign:"center"
    }, 
    tb: {
        width:"100%",   
        borderRadius:5,
        backgroundColor:"#efefef",
        color:"#333",
        fontWeight:"bold", 
        paddingHorizontal:10,
        paddingVertical:15,
        marginVertical:10,       
    },
    formLabel: {
        fontSize:16,
    },
    headerText: {
        fontSize:20, 
        fontWeight:"bold", 
        marginVertical:10
    }
});

export default HomeScreen;