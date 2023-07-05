import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import {FlatList} from 'react-native';
import CategoryCard from '../components/CategoryCard';

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.MainContainer}>
      <Header
        HeaderTitle={'Discover'}
        backPress={() => navigation.navigate('Home')}
      />
      <View style={styles.MainContainer}>
        <FlatList
          data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={({item}) => <CategoryCard />}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.flatList}
        />
      </View>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 12,
  },
  flatList: {
    padding: 8,
  },
  separator: {
    width: 8,
  },
});
