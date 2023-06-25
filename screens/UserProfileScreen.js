import {StyleSheet, Text, View} from 'react-native';

const UserProfileScreen = () => {
  return (
    <View style={styles.MainContainer}>
      <Text>UserProfileScreen</Text>
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
