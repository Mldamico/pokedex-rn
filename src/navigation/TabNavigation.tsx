import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform} from 'react-native';
import {HomeScreen} from '../screens/HomeScreen';
import {SearchScreen} from '../screens/SearchScreen';
import {StackNavigation} from './StackNavigation';

import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
export function TabNavigation() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBarOptions={{
        activeTintColor: '#5856D6',
        labelStyle: {marginBottom: Platform.OS === 'android' ? 10 : 0},
        style: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.92)',
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 60,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={StackNavigation}
        options={{
          tabBarLabel: 'Pokemon',
          tabBarIcon: ({color}) => (
            <Icon name="list-outline" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Pokemon',
          tabBarIcon: ({color}) => (
            <Icon name="search-outline" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
