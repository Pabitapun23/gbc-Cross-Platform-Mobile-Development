import { StyleSheet, Text, View } from 'react-native';

export default function RowItem() {

    return(
        <View style={styles.container}>
            <Text>
                This is a row
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

