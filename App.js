import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#0f111d'}}>
      <NavigationContainer>
        <Stack.Navigator
          backgroundColor={(backgroundColor = '0f111d')}
          initialRouteName="Home"
          activeColor="#f0edf6"
          inactiveColor="#f4f1f8"
          barStyle={{backgroundColor: '#292b37'}}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({tintColor}) => (
                <Icon name="home-outline" size={24} color="black" />
              ),
            }}
          />
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              tabBarIcon: ({tintColor}) => (
                <IconMaterial name="category" size={24} color="black" />
              ),
            }}
          />
          <Stack.Screen
            name="Favourites"
            component={FavouritesScreen}
            options={{
              tabBarIcon: ({tintColor}) => (
                <IconMaterial name="favorite-outline" size={24} color="black" />
              ),
            }}
          />
          <Stack.Screen
            name="User"
            component={UserProfileScreen}
            options={{
              tabBarIcon: ({tintColor}) => (
                <IconFontAwesome5 name="user-alt" size={24} color="black" />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
