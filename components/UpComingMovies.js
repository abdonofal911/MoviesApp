import React from 'react';
import SectionTitle from './SectionTitle';
import {StyleSheet, Text, View, ScrollView ,Image} from 'react-native';
import { Card } from 'react-native-paper';



const UpComingMovies = () => {
  return (
    <View>
    <SectionTitle titleText='Upcoming Movies' ButtonTitle='View all' /> 
    <Card/>
    </View>
  )
}

export default UpComingMovies
