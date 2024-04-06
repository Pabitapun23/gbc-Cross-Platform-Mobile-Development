import { View, Text, StyleSheet, Pressable } from "react-native"

const ButtonComponent = ({ onPress, text, disabled, justifyContent }) => {
    return (
        // Customized button component
        <View style={[styles.btnContainer, { justifyContent: justifyContent }]}>
            <Pressable style={[styles.buttonBg, { backgroundColor: disabled ? '#808080' : '#0064B1' }]} onPress={onPress} disabled={disabled}>
                <Text style={styles.buttonText}>{text}</Text>
            </Pressable>
        </View>

    );
}

export default ButtonComponent;

const styles = StyleSheet.create({
    // btn design
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    buttonBg: {
        backgroundColor: '#0064B1',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 10,
        alignItems: 'center',
        marginVertical: 15,
        width: "40%",
        height: 40,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#fff"
    },
})