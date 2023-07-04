import React from 'react';
import {Image, Text, View, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MovieCard from './MovieCard';

const CategoryCard = () => {
  return (
    <View style={styles.container}>
      <MovieCard imageStyle={styles.image} />
      <Text style={styles.title}>Categoty Title</Text>
      <Icon name="navigate-next" size={32} color="black" />
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('screen').width * 0.3,
    height: 75,
    backgroundColor: 'gray',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 18,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 6,
  },
});
