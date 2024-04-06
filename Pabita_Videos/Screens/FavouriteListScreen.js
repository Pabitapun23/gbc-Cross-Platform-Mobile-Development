import { View, Text, StyleSheet, Pressable, PanResponder } from "react-native"
import { useState, useEffect, useRef } from "react";

// firestore
import { db } from "../firebaseConfig";
import { collection, getDocs, deleteDoc } from "firebase/firestore";

// import components
import ButtonComponent from "../Components/ButtonComponent";
import FlatListComponent from "../Components/FlatListComponent";

const FavouriteListScreen = ({ navigation }) => {

    // state variables
    const [favouriteList, setFavouriteList] = useState([])

    useEffect(() => {
        console.log("Favourite screen loaded")

        // Move all the database fetch & state update code into the useEffect
        retrieveVideosFromDB()
    }, [])

    // func to retrieve favourite videos from the db
    const retrieveVideosFromDB = async () => {

        try {
            // request data from favourite_videos collection
            const querySnapshot = await getDocs(collection(db, "favourite_videos"));

            const resultsFromFirestore = []

            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                // make the object to add to the array
                const itemToAdd = {
                    id: doc.id,
                    ...doc.data()
                }
                // append to array
                resultsFromFirestore.push(itemToAdd)
            });

            console.log("array data...")
            console.log(resultsFromFirestore)

            // save data to a state variable
            // when the state variable updates, the list will auto update
            setFavouriteList(resultsFromFirestore)
        }
        catch (err) {
            console.log(err.message)
        }

    }

    // navigate to selected list item's details screen
    const goToDetailsScreen = (id) => {
        navigation.push("Video Details", { id })
    }

    // func to delete all favourite videos from the db
    const clearFavourites = async (favourite_videos) => {

        console.log("ClearFavourites btn pressed!")

        try {
            // Get a reference to the collection
            const collectionRef = collection(db, favourite_videos);

            // Retrieve all documents from the collection
            const querySnapshot = await getDocs(collectionRef);

            // Iterate through the documents and delete each one
            querySnapshot.forEach(async (doc) => {
                await deleteDoc(doc.ref);
                console.log(`Document with ID ${doc.id} deleted successfully`);
            });

            console.log(`All documents deleted from collection ${favourite_videos}`);

            // Re-fetch data after deletion
            retrieveVideosFromDB();

            // alert msg
            alert("All videos deleted successfully!")
        } catch (error) {
            console.error("Error deleting documents: ", error);
        }
    }

    // for putting content divider between list items
    const ItemDivider = () => {
        return (
            <View style={{ height: 1, width: "95%", backgroundColor: "#888", marginHorizontal: 8 }} />
        )
    }

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "favourite_videos", id));
            retrieveVideosFromDB();
            alert("Video is deleted successfully")
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    };


    // TODO: Not working single delete slide!!!!!
    // Ref for PanResponder
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dx < -50) { // Adjust the threshold for swipe action
                    console.log("Swipe detected. Deleting item...");
                    handleDelete(item.id);
                }
            },
        })
    ).current;

    // renderItem function
    const renderItem = ({ item }) => {
        return (
            <View {...panResponder.panHandlers}>
                <Pressable style={styles.listItem} onPress={() => goToDetailsScreen(item.id)}>
                    <Text style={styles.listTitle}>{item.title}</Text>
                </Pressable>
            </View>
        );
    };

    
    return (
        <View style={styles.favContainer}>
            <Text style={styles.header}> My Favourites </Text>

            {/* Conditionally render the CLEAR FAVORITES button */}
            <ButtonComponent
                onPress={() => clearFavourites("favourite_videos")}
                text={favouriteList.length > 0 ? 'Clear Favourites' : 'Clear Favourites'}
                disabled={favouriteList.length === 0}
                justifyContent={"flex-end"}
            />

            {/* Conditionally render message when there are no favorites */}
            {favouriteList.length === 0 ? (
                <Text style={styles.noFavoritesText}>No favorites found</Text>
            ) : (

                // Customized FlatList
                <FlatListComponent
                    data={favouriteList}
                    keyExtractor={(item) => item.id}
                    renderItem={(item) => renderItem(item)}
                    ItemSeparatorComponent={ItemDivider}
                />
            )}
        </View>
    );

}

export default FavouriteListScreen;

const styles = StyleSheet.create({
    favContainer: {
        // flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        width: '100%',
        justifyContent: 'center',
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    noFavoritesText: {
        textAlign: 'center',
        paddingTop: 100,
        fontSize: 18,
        color: 'gray',
        height: '100%',
    },

    // List data design
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

    deleteButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        flex: 1,
    },


})