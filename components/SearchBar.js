import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={24} color="gray" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={text => {
          console.log(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: Dimensions.get('screen').width * 0.9,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
});

export default SearchBar;
