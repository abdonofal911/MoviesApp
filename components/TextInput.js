import React from 'react'
import {StyleSheet, Text, View , TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Input = ({ placeholder, onSubmit }) => {
  return (
    <View style={styles.container}>
    <Icon name="search" size={24} color="black" />
    <TextInput
    placeholder={placeholder}
    style={styles.input}
    onSubmit={onSubmit}
  />
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
      padding: 10 , flexDirection:'row'
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
