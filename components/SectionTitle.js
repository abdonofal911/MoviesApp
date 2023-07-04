import {Button} from '@rneui/base';
import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

const SectionTitle = ({titleText, ButtonTitle}) => {
  return (
    <View style={styles.TitleContainer}>
      <View>
        <Text style={styles.titleText}>{titleText}</Text>
      </View>
      <View>
        <Button
          title={ButtonTitle}
          type="clear"
          titleStyle={{color: '#6e6e78'}}
        />
      </View>
    </View>
  );
};

export default SectionTitle;
const styles = StyleSheet.create({
  TitleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 2,
    padding: 2,
  },
  titleText: {
    fontSize: 20,
    color: 'black',
    marginLeft: 5,
  },
});
