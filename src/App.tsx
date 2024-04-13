import React from 'react'
import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import news_data from './news_data.json'
import NewsCard from './components/news_card/news_card'
import news_banner_data from './news_banner_data.json'
function App() {
const renderNewsCard = (item: any) => <NewsCard news={item.item}></NewsCard>
const keyExtractor = (item: any) => item.u_id.toString()
  return (
    <SafeAreaView style={styles.container}>
     
        
        <FlatList 
        
        ListHeaderComponent={
          <ScrollView 
       
          horizontal={true}>
          {
            news_banner_data.map((item: any) => <View key={item.id}>
              <Image source={{uri: item.imageUrl}} style={styles.newsBanner}/>
            </View>)
          }
         
        </ScrollView>
        }
        numColumns={2}
        keyExtractor={keyExtractor}
        
         data={
          news_data
         }
        
         renderItem={
         
          renderNewsCard
        }
         
         ></FlatList>
     
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
   
  }
,
  newsBanner: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
    padding: 20,
    margin: 10,
    borderRadius: 20
  }
})
export default App
