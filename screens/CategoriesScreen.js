import {StyleSheet, Text, View} from 'react-native';

const CategoriesScreen = () => {
  return (
    <View style={styles.MainContainer}>
      <Text>CategoriesScreen</Text>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
