import {StyleSheet, Text, View} from 'react-native';

const FavouritesScreen = () => {
  return (
    <View style={styles.MainContainer}>
      <Text>FavouritesScreen</Text>
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
