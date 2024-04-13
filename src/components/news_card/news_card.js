import react from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './news_card.style'
const NewsCard = ({news}) => {
    return(
        <View style={styles.newsCardContainer}>
             <Image style={styles.newsCardImage}
             source={{uri: news.imageUrl}}/>
            <Text style={styles.newsCardTitle}>{news.title}</Text>
            <Text style={styles.newsCardDescription}>{news.description}</Text>
            <Text style={styles.newsCardAuthor}>{news.author}</Text>
            <TouchableOpacity style={styles.newsCardReadMore}>
                <Text style={styles.newsCardReadMore}>Read More</Text>
            </TouchableOpacity>
        </View>
    );
}

export default NewsCard