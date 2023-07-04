import React from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import MovieCard from './MovieCard';
import Icon from 'react-native-vector-icons/Ionicons';

const Card = () => {
  return (
    <View style={styles.container}>
      <MovieCard imageStyle={styles.image} />
      <Text style={styles.title}> Movie Title</Text>
      <Text style={styles.category}>Category</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Icon name="star" size={22} color="yellow" style={{marginLeft: 10}} />
        <Text style={styles.rate}>8.5</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width * 0.45,
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
    backgroundColor: 'gray',
    borderRadius: 15,
  },
  card: {
    width: 200,
    height: 200,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    margin: 10,
  },
  image: {
    width: Dimensions.get('screen').width * 0.45,
    height: 140,
    backgroundColor: 'gray',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  title: {fontSize: 18, marginLeft: 2, fontWeight: 'bold'},
  category: {fontSize: 15, marginLeft: 8},
  rate: {fontSize: 14, marginLeft: 8},
});
