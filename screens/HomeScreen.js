import {StyleSheet, Text, View, ScrollView, FlatList, Dimensions} from 'react-native';
//mport {Image, SearchBar} from '@rneui/themed';
import WelcomeBar from '../components/WelcomeBar';
import UpComingMovies from '../components/UpComingMovies';
import SectionTitle from '../components/SectionTitle';
import MovieCard from '../components/MovieCard';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.MainContainer}>
      <View style={styles.WelcomeBar}>
        <WelcomeBar
          userName={'Abdo'}
          onUserIconPress={() => navigation.navigate('User')}
        />
      </View>
        <SearchBar
          containerStyle={{borderRadius: 8}}
          onSubmit={() => {}}
          placeholder={'Search'}
        />
      <SectionTitle titleText="Upcoming Movies" ButtonTitle="View all" ButtonPress={()=>navigation.navigate('Categories')} />
      <FlatList
        data={[0, 1, 2, 3]}
        renderItem={({item}) => (
          <MovieCard imageStyle={styles.imageStyle} />
        )}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.flatList} 
         showsHorizontalScrollIndicator = {false} 
      />
      <SectionTitle titleText="New Movies" ButtonTitle="View all" ButtonPress={()=>navigation.navigate('Categories')} />
      <FlatList 
      data={[0, 1, 2, 3]}
        renderItem={({item}) => (
          <Card />
        )}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.flatList} 
         showsHorizontalScrollIndicator = {false}
      />

    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  flatList: {
    padding: 8,
  },
  separator: {
    width: 8,
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
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  imageStyle: {
    width: Dimensions.get('screen').width*0.85,
    height: 200,
    backgroundColor: 'gray',
    resizeMode: 'cover',
    borderRadius : 15 , 
  },
});
