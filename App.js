import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import PostScreen from './PostScreen';
import OwlInfoScreen from './OwlInfoScreen'; 
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="OwlInfo" component={OwlInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
