import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState, useEffect } from 'react';

// npm install @react-native-picker/picker

// https://api.jikan.moe/v4/anime?q=Pikachu
export default function App() {

  const [anime, setAnime] = useState("Naruto")
  const [animeData, setAnimeData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchDataFromAPI = () => {
    // setIsLoading(false)

    let apiURL = `https://api.jikan.moe/v4/anime?q=${anime}`
    console.log(`apiURL : ${apiURL}`)

    fetch(apiURL)
    .then( (response) => {
      console.log(`response : ${JSON.stringify(response)}`);

      if (response.ok) {
        console.log(`server responded with successfull response`);

        // try to extract the data out of response
        let jsonData = response.json()
        console.log(`response.data : ${JSON.stringify(jsonData)}`)
        return jsonData
        
      } else {
        console.log(`Unsuccessful response from server. Status code : ${response.status}`)
      }
    })

    .then( (apiData) => {
      if (apiData !== undefined) {
        console.log(`json data from API is available`);

        // set the array of data to state
        setAnimeData(apiData.data)
      } else {
        console.log(`no data from api`);

        setAnimeData([])
      }
    })
    .catch( (err) => {console.error(`error occurred while connecting with API : ${err}`)})
    .finally( () => {setIsLoading(false)})

  }

  useEffect(() => {fetchDataFromAPI()}, [anime])

  const renderAnimeItem = ( {item} ) => (
    <View style={styles.listItem} >
      <Image source = { {uri : item.images.jpg.image_url} } style={styles.imgAnime}/>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.score}>{item.score}</Text>
      <View style={styles.separator} />
    </View>
  )

  return (
    <View style={styles.container}>
      <Text>Working with web services</Text>

      <Picker 
        selectedValue={anime} 
        onValueChange={ (value, index) => {
          setAnime(value)
        }}
        >
        <Picker.Item value="Pikachu" label="Pikachu" />
        <Picker.Item value="Naruto" label="Naruto"/>
        <Picker.Item value="L" label="L" />
        <Picker.Item value="Tanjiro" label="Tanjiro" />
      </Picker>

      {isLoading ? (
        <ActivityIndicator color= "green" size="large" animating={true} />
      ) : (
        // <Text> Data is available {anime}</Text>
        <FlatList
           style={styles.animeList}
           data={animeData}
           key={ (item) => {return item.mal_id}}
           renderItem={ (item) => renderAnimeItem(item) }
          //  renderItem={ (item) => {return <Text>{item.title}</Text>}}
         />
      )
    }


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  animeList:{
    alignContent:"stretch",
    width:"100%",
  },
container:{
    marginTop: 80,
    paddingHorizontal: 24,
    flex: 1,
},
separator:{
    height: 1,
    backgroundColor: "#dddddd",
},
imgAnime: {
    width: '90%',
    height: 150,
    padding: 10,
    borderRadius: 1,
},
listItem: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    // backgroundColor : "pink",
},
title: {
    fontSize: 15,
    textAlign: 'center',
    padding: 10,
    color: 'orangered',
    fontWeight: 'bold',
},
synopsis: {
    fontSize: 15,
    textAlign: 'center',
    padding: 10,
    color: 'black',
},
score: {
    fontSize: 15,
    textAlign: 'center',
    padding: 10,
    color: 'black',
    fontWeight: 'bold',
}
});
