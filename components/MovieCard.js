import React from 'react';

import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

const MovieCard = () => {
  const imageSource = {
    uri: '../assets/Images/MovieImage.jpeg',
    width: 100,
    height: 100,
  };
  return (
    <Pressable style={styles.ImageContainer}>
      <Image source={imageSource} />
    </Pressable>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  ImageContainer: {
    width: '80%',
    height: 100,
  },
  Image: {width: '80%', height: 100},
});
