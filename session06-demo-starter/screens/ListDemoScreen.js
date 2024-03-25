// 1. Import the FlatList
import { StyleSheet, Text, View } from 'react-native';

export default function ListDemoScreen() {

    // 2. Define a data source 
    // (data that should be displayed in the FlatList)

    // 3. OPTIONAL: for more complex row layouts
    // a. Create a function to render the row layout
    // b. Create a separate component for the row layout

    return(
        <View style={styles.container}>
            <Text>
                Here is the list demo screen
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

