import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen'
import {DateScreen} from '../screens/DateScreen'
import {GenderScreen} from '../screens/GenderScreen'
import {NameScreen} from '../screens/NameScreen'


const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} options={HomeScreen.options} />
        <Stack.Screen name="Name" component={NameScreen} options={NameScreen.options} />
        <Stack.Screen name="Date" component={DateScreen} options={DateScreen.options} />
        <Stack.Screen name="Gender" component={GenderScreen} options={GenderScreen.options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
