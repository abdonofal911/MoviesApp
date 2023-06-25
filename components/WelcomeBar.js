import React from 'react';
import {Avatar} from '@rneui/themed';
import {StyleSheet, Text, View} from 'react-native';

const WelcomeBar = ({userName , onUserIconPress}) => {
  return (
    <View style={styles.WelcomeBarContainer}>
     <View style={styles.TextContainer}>
     <Text style={styles.WelcomeText}>Hello Sir {userName}</Text>
      <Text style={styles.AskingText}>What Do you Want to watch ?</Text>
      </View>
      <Avatar
        avatarStyle={{ marginRight : 4 , margin : 2}}
        size={48}
        rounded
        onPress={onUserIconPress}
        source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
      />
    </View>
  );
};

export default WelcomeBar;
const styles = StyleSheet.create({
  WelcomeBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextContainer : {
    flexDirection : 'column'
  },
  WelcomeText: {fontSize: 24, color: 'black'}, 
  AskingText :  {fontSize : 14 , color : 'gray'}
});
