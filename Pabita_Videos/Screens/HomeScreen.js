import { useState, useEffect } from "react"
import { View, Text, StyleSheet, Pressable, ActivityIndicator } from "react-native"
import ButtonComponent from "../Components/ButtonComponent"
import FlatListComponent from "../Components/FlatListComponent"


const HomeScreen = ({ navigation }) => {

    // State variables
    const [videoData, setVideoData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // func to fetch data from api
    const fetchDataFromAPI = () => {
        let apiURL = `https://api.dailymotion.com/user/x1audmk/videos?limit=20`
        console.log(`apiURL : ${apiURL}`)

        fetch(apiURL)
            .then((response) => {
                console.log(`response : ${JSON.stringify(response)}`);

                if (response.ok) {
                    console.log(`Server responded with successfull response`)

                    // try to extract data out of response
                    let jsonData = response.json()
                    console.log(`response.data : ${JSON.stringify(jsonData)}`)
                    return jsonData

                } else {
                    console.log(`Unsuccessful response from server. Status code : ${response.status}`)
                }
            })
            .then((apiData) => {
                if (apiData !== undefined) {
                    console.log(`json data from API is available`);

                    // set the array of data to state
                    setVideoData(apiData.list)

                    console.log(apiData.list)
                } else {
                    console.log(`no data from api`);

                    setVideoData([])
                }
            })
            .catch((err) => { console.error(`error occurred while connecting with API : ${err}`) })
            .finally(() => { setIsLoading(false) })
    }

    // to render list items on the screen 
    const renderVideo = ({ item }) => (
        <Pressable style={styles.listItem} onPress={() => goToDetailsScreen(item)}>
            <Text style={styles.listTitle}>{item.title}</Text>
        </Pressable>
    )

    // useEffect
    useEffect(() => {
        fetchDataFromAPI()
    }, [])


    // for putting content divider between list items
    const ItemDivider = () => {
        return (
            <View style={{ height: 1, width: "95%", backgroundColor: "#888", marginHorizontal: 8 }} />
        )
    }

    // navigate to favourite screen
    const goToFavouriteScreen = () => {
        navigation.navigate("Favourites")
    }

    // navigate to selected list item's details screen
    const goToDetailsScreen = (item) => {
        navigation.navigate("Video Details", { id: item.id })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Videos From Wired Magazine</Text>

            {/* Customized button to view favourites */}
            <ButtonComponent
                onPress={goToFavouriteScreen}
                text={"View Favourites"}
                justifyContent={"flex-end"}
            />

            {isLoading ? (<ActivityIndicator color="green" size="large" animating={true} />) : (
                // <Text> Data is available </Text>

                <FlatListComponent
                    data={videoData}
                    key={(item) => { return item.id }}
                    renderItem={(item) => renderVideo(item)}
                    ItemSeparatorComponent={ItemDivider}
                />
            )}

        </View>
    );

}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        justifyContent: 'flex-start'
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    // List items design
    listItem: {
        flexDirection: 'column',
        alignItems: 'left',
        padding: 10,
    },

    listTitle: {
        fontSize: 15,
        textAlign: 'left',
        paddingVertical: 10,
        color: 'black',
        fontWeight: 'bold',
    },

})