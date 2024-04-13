import {Dimensions, StyleSheet} from 'react-native'

export default StyleSheet.create({
    newsCardContainer: {
        padding: 10,
        margin: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        width: Dimensions.get('window').width / 2 - 20,
        justifyContent: 'space-evenly',
    },

        newsCardTitle: {
            fontSize: 22,
            fontWeight: 'bold',
           
            color: 'white',
           padding: 5,

        }
            ,

            newsCardDescription: {
                fontSize: 20,
                fontWeight: 'bold',
              
        fontFamily: 'Times New Roman',
                padding: 5,
                color: 'green',
            },

                newsCardAuthor: {
                    fontSize: 20,
                    fontWeight: 'bold',
                    fontStyle: "italic",
                    textDecorationLine: "underline",
                    textAlign: "right",
                  
                    padding: 5,
                    color: 'red',},

                    newsCardReadMore: {
                        fontSize: 20,
                       textAlign: 'center',
                        fontWeight: 'bold',                  
                        color: 'white',
                        backgroundColor: 'blue',
                       padding: 5,
                        borderRadius: 15,
                        
            },

            newsCardImage: {
                width: Dimensions.get('window').width / 2 - 20,
                height: Dimensions.get('window').height / 4,
                borderRadius: 20,
               
             

        }}
        )