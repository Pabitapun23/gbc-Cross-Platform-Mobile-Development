import { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, Switch, Alert} from "react-native";
import {Picker} from '@react-native-picker/picker';

//npm install @react-native-picker/picker --save

const UserInputComponents = () => {

    const [name, onChangeName] = useState('');
    const [phone, onChangePhone] = useState('123-456-7890');
    const [password, onChangePassword] = useState('');
    const [membership, onChangeMembership] = useState(true);
    const [language, setLanguage] = useState('Java');

    const languageList = ["React Native", "Java", "C#", "Python"];

    const getSelectedPickerItem = (selectedLanguage) => {
        Alert.alert(selectedLanguage);
        console.log(`selected Language : ${selectedLanguage}`);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>User Input Components </Text>

            <View style={styles.inputContainer}>

            <TextInput 
                style={styles.input}
                placeholder="Enter Name"
                textContentType="name"
                value={name}
                onChangeText={onChangeName}
                autoCapitalize="words"
            />

            <TextInput 
                style={styles.input}
                placeholder="Enter phone number"
                textContentType="telephoneNumber"
                maxLength={12}
                keyboardType="phone-pad"
                keyboardAppearance="dark"
                returnKeyType="next"
                value={phone}
                onChangeText={onChangePhone}
            />

            <TextInput 
                style={styles.input}
                placeholder="Enter password"
                returnKeyType="done"
                value={password}
                onChangeText={onChangePassword}
                secureTextEntry={true}
            />

            <Text style={styles.textStyle}>Are you already a member ? </Text>
            <Switch
                value={membership}
                onValueChange={onChangeMembership}
                thumbColor={membership ? "springgreen" : "orangered"}
                trackColor={ {false: "orangered", true: "springgreen"}}
            />

            <Text style={styles.textStyle}>Select Language : </Text>
            <Picker
                style={styles.picker}
                selectedValue = {language}
                onValueChange = { (newLanguage) => {
                    getSelectedPickerItem(newLanguage);
                    setLanguage(newLanguage); 
                    } }
            >
                {
                    languageList.map( (language, index) => 
                    {return <Picker.Item 
                        style={styles.pickerItem} 
                        label={language} 
                        value = {language} 
                        key={index} />}) 
                }
            </Picker>

                {/* <Picker.Item label={languageList[0]} value={languageList[0]}/>
                <Picker.Item label="Java" value={"Java"}/>
                <Picker.Item label="C#" value={"C#"}/>
                <Picker.Item label="Python" value={"Python"}/> */}

            </View>

            <View style={styles.outputContainer}>
                <Text style={styles.outputText}> Name : {name} </Text>
                <Text style={styles.outputText}> Phone : {phone} </Text>
                <Text style={styles.outputText}> Password : {password} </Text>
                <Text style={styles.outputText}> Is Member ? : {membership ? "Yes" : "No"} </Text>
                <Text style={styles.outputText}> Language : {language} </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor : '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    inputContainer:{
        flex: 1,
        backgroundColor : '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    outputContainer:{
        flex: 1,
        backgroundColor : '#1f4',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    textStyle : {
        fontSize: 30,
        color: 'saddlebrown',
        fontStyle: 'italic',
        fontWeight : 'bold',
    },
    input: {
        height: 50,
        margin: 8,
        borderWidth: 1,
        padding: 10,
        fontSize: 25,
    },
    outputText: {
        height: 50,
        fontSize: 25,
        color: 'red',
    },
    picker: {
        backgroundColor: 'blue',
        height: 150,
        width: '100%'
    },
    pickerItem: {
        fontSize: 25,
    },
});

export default UserInputComponents;