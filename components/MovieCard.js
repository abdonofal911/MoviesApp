import React from 'react';

import {
  Pressable,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

const MovieCard = ({imageStyle, CoverPress}) => {
  return (
    <Pressable onPress={CoverPress}>
      <Image
      source={{
        uri: 'https://www.vintagemovieposters.co.uk/wp-content/uploads/2017/10/IMG_8729-1-636x471.jpg',
      }}
        style={imageStyle}
      />
    </Pressable>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 200,
    borderRadius: 10,
    backgroundColor: 'black',
    margin: 5,
  },
  image: {
    width: Dimensions.get('screen').width * 0.85,
    height: 200,
    backgroundColor: 'gray',
    resizeMode: 'cover',
    borderRadius: 15,
  },
});
