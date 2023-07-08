import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import SectionTitle from '../components/SectionTitle';

const MovieDetailsScren = ({navigation}) => {
  return (
    <View style={styles.MainContainer}>
      <Header
        primaryIcon={'arrow-back'}
        secondaryIcon={'heart-outline'}
        backPress={() => navigation.navigate('Home')}
        secondaryPress={() => console.log('Added To Favorite')}
      />
      <ImageBackground
        source={{
          uri: 'https://www.vintagemovieposters.co.uk/wp-content/uploads/2017/10/IMG_8729-1-636x471.jpg',
        }}
        style={[styles.CoverimageStyle, {backgroundColor: 'white'}]}
        blurRadius={3.5}>
        <Image
          source={{
            uri: 'https://www.vintagemovieposters.co.uk/wp-content/uploads/2017/10/IMG_8729-1-636x471.jpg',
          }}
          style={styles.MainimageStyle}
        />
        <Icon
          name="play-circle-outline"
          size={60}
          color={'red'}
          style={styles.icon}
          onPress={() => {
            console.log('Playing Movie');
          }}
        />
      </ImageBackground>
      <View style={styles.details}>
        <View style={styles.buttonsContainer}>
          <Icon
            name="add-circle-outline"
            color={'black'}
            size={42}
            onPress={() => {
              console.log('Adding to the list');
            }}
          />
          <Icon
            name="heart-outline"
            color={'black'}
            size={42}
            onPress={() => {
              console.log('Added To Favorite');
            }}
          />
          <Icon
            name="arrow-down-circle-outline"
            color={'black'}
            size={42}
            onPress={() => {
              console.log('Downloading');
            }}
          />
          <Icon
            name="share-outline"
            color={'black'}
            size={42}
            onPress={() => {
              console.log('Shareing');
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Good Fellas</Text>
          <Text style={styles.description}>
            description Sample description Sample description Sample description
            Sample description Sample description Sample description Sample
            description Sample description Sample description Sample description
            Sample description Sample description Sample description Sample{' '}
          </Text>
        </View>
        <View style={styles.recommendedSection}>
          <SectionTitle
            titleText="Recommended"
            ButtonTitle="View all"
            ButtonPress={() => navigation.navigate('Categories')}
          />
          <FlatList
            data={[0, 1, 2, 3 , 4,5]}
            renderItem={({item}) => (
              <MovieCard
                imageStyle={styles.imageStyle}
                CoverPress={() => navigation.navigate('MovieDetails')}
              />
            )}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            contentContainerStyle={styles.flatList}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default MovieDetailsScren;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  CoverimageStyle: {
    width: Dimensions.get('screen').width * 1,
    height: 230,
    resizeMode: 'cover',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainimageStyle: {
    width: Dimensions.get('screen').width * 0.5,
    height: 150,
    position: 'absolute',
    zIndex: 98,
    top: 130,
    right: 175,
  },
  details: {
    width: Dimensions.get('screen').width * 1,
    height: Dimensions.get('screen').height * 0.65,
    position: 'absolute',
    top: 288,
    zIndex: -1,
  },
  icon: {
    position: 'absolute',
    top: 197.5,
    left: 280,
  },
  buttonsContainer: {
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-evenly',
    top: 100,
  },
  textContainer: {
    position: 'relative',
    top: 120,
    left: 10,
  },
  title: {fontSize: 24, fontWeight: 'bold'},
  description: {fontSize: 16},
  recommendedSection: {
    position: 'relative',
    top: 150,
  },
  imageStyle: {
    width: Dimensions.get('screen').width * 0.3,
    height: 90,
    backgroundColor: 'gray',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  flatList: {
    padding: 6,
  },
  separator: {
    width: 6,
  },
});
