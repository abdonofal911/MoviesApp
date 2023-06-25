import {StyleSheet, Text, View, ScrollView} from 'react-native';
//import SearchBar from '../components/SearchBar';
import {SearchBar} from '@rneui/themed';
import WelcomeBar from '../components/WelcomeBar';
import UpComingMovies from '../components/UpComingMovies';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.MainContainer}>
      <View style={styles.WelcomeBar}>
        <WelcomeBar
          userName={'Abdo'}
          onUserIconPress={() => navigation.navigate('User')}
        />
      </View>
      <View style={styles.SearchBar}>
        <SearchBar
          containerStyle={{borderRadius: 8}}
          onSubmit={() => {}}
          placeholder={'Search'}
        />
      </View>
      <UpComingMovies />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  WelcomeBar: {
    padding: 6,
    marginLeft: 6,
  },
  SearchBar: {
    paddingTop: 6,
    width: '100%',
    justifyContent: 'center',
    padding: 6,
  },
});
