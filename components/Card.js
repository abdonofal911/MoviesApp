import React from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import MovieCard from './MovieCard';


const Card = () => {
  return (
    <ScrollView horizontal>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </ScrollView>
  )
}

export default Card
