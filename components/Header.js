import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({HeaderTitle}) => {
  return (
    <View style={styles.HeaderContainer}>
      <Icon name="arrow-back" size={36} onPress={() => console.log('GoBack')} />
      <Text style={styles.Text}>{HeaderTitle}</Text>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  HeaderContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 6,
    marginLeft: 2,
    alignItems: 'baseline',
  },
  Text: {
    justifyContent: 'center',
    fontSize: 36,
    paddingLeft: 24,
    marginTop: 0,
  },
});
