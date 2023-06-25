import React from 'react'
import {StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from './TextInput';

const SearchBar = ({ placeholder, onSubmit }) => {
  return (
    <View style={styles.container}>
    <Input placeholder={placeholder} onSubmit={onSubmit} />
  </View>
  )
}

export default Input 

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 40,
      borderRadius: 8,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10
    },
    input: {
      height: 30,
      fontSize: 16
    },
    icon: {
      width: 24,
      height: 24,
      marginLeft: 10
    }
  });