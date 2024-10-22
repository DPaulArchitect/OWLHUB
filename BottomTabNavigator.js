import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import PostScreen from './PostScreen';
import ProfileScreen from './ProfileScreen';
import OwlInfoScreen from './OwlInfoScreen';
import OwlSaleScreen from './OwlSaleScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Post') {
            iconName = focused ? 'ios-create' : 'ios-create-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          } else if (route.name === 'OwlInfo') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } else if (route.name === 'OwlSale') {
            iconName = focused ? 'ios-cart' : 'ios-cart-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="OwlInfo" component={OwlInfoScreen} />
      <Tab.Screen name="OwlSale" component={OwlSaleScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
