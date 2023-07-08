import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({HeaderTitle, backPress, primaryIcon, secondaryIcon , secondaryPress}) => {
  return (
    <View style={styles.HeaderContainer}>
      <Icon name={primaryIcon} size={36} onPress={backPress} />
      <Text style={styles.Text}>{HeaderTitle}</Text>
      <Icon
        name={secondaryIcon}
        size={36}
        onPress={secondaryPress}
      />
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  HeaderContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin : 8 , 
    alignItems: 'baseline',
  },
  Text: {
    justifyContent: 'center',
    fontSize: 32,
    paddingLeft: 24,
    marginTop: 0,
  },
});
