import { useState, useEffect } from "react"
import { View, Text, StyleSheet, Image, Pressable, ActivityIndicator } from "react-native"
import { ScrollView } from "react-native-gesture-handler"

// import component
import ButtonComponent from "../Components/ButtonComponent"

// firebase
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebaseConfig"


const VideoDetailsScreen = ({ route }) => {

    // state variables
    const [selectedVideoData, setSelectedVideoData] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    // func to fetch data from api for single video
    const fetchDataFromAPIForSingleVideo = () => {
        const { id } = route.params;
        let apiURL = `https://api.dailymotion.com/video/${id}?fields=thumbnail_240_url,description,views_total,title,created_time`
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
                    console.log(`Failed to fetch video details. Unsuccessful response from server. Status code : ${response.status}`)
                }
            })
            .then((apiData) => {
                if (apiData !== undefined) {
                    console.log(`json data from API is available`);

                    // set the array of data to state
                    setSelectedVideoData(apiData)

                    console.log(apiData)
                } else {
                    console.log(`no data from api`);

                    setSelectedVideoData([])
                }
            })
            .catch((err) => { console.error(`error occurred while connecting with API : ${err}`) })
            .finally(() => { setIsLoading(false) })
    }

    useEffect(() => {
        fetchDataFromAPIForSingleVideo()
    }, [])


    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator color="green" size="large" animating={true} />
            </View>
        );
    }

    if (!selectedVideoData || Object.keys(selectedVideoData).length === 0) {
        return (
            <View style={styles.container}>
                <Text>Error: Unable to fetch video details</Text>
            </View>
        );
    }

    // func to add video to favourite collection into db
    const addToFavourite = async () => {
        console.log(`Add to favourite list!`)
        const { id } = route.params;

        const { title, description, views_total, thumbnail_240_url } = selectedVideoData;

        const videoToInsert = {
            id,
            title,
            description,
            views_total,
            thumbnail_240_url,
        }

        try {
            const insertedDoc = await addDoc(collection(db, "favourite_videos"), videoToInsert)
            console.log(`Document created, id is: ${insertedDoc.id}`)

            alert("Successfully added to favourite list!")
        } catch (err) {
            console.log(`${err.message}`)
        }

    }


    return (
        <ScrollView>
            <View style={styles.detailContainer}>

                {/* For thumbnail */}
                <Image source={{ uri: selectedVideoData.thumbnail_240_url }} style={{ width: "100%", height: 320 }} />

                {/* title */}
                <Text style={styles.videoTitle}>{selectedVideoData.title}</Text>

                {/* Views */}
                <Text style={styles.videoViews}>Views: {selectedVideoData.views_total}</Text>

                {/* description */}
                <Text style={styles.videoDescription}>{selectedVideoData.description}</Text>

                {/* Customized button to add video to favourites */}
                <ButtonComponent
                    onPress={addToFavourite}
                    text={"Favourite"}
                    justifyContent={"center"}
                />

            </View>
        </ScrollView>
    );

}

export default VideoDetailsScreen;

const styles = StyleSheet.create({
    detailContainer: {
        flex: 1,
        backgroundColor: "#fff",
        height: '100%'
    },

    // Video details
    videoTitle: {
        fontSize: 20,
        padding: 15,
        fontWeight: '700',
    },

    videoViews: {
        fontSize: 16,
        color: 'gray',
        paddingHorizontal: 15,

    },

    videoDescription: {
        fontSize: 15,
        color: 'black',
        padding: 15,
    },

})