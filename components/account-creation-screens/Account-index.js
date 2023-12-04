import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import BioDataScreen from './BioDataScreen';
import SetGoalsScreen from './SetGoalsScreen';
import Screen1 from './Screen1';
import GoalsScreen from './GoalsScreen';
import CharacterCustomizerScreen from './CharacterCustomizerScreen'

const Stack = createNativeStackNavigator();

const AccountIndex = () => (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Screen1Name" component={Screen1} />
      <Stack.Screen name="BioDataName" component={BioDataScreen} />
      <Stack.Screen name="SetGoalsName" component={SetGoalsScreen} />
      <Stack.Screen name="CCName" component={CharacterCustomizerScreen} />
      <Stack.Screen name="GoalsDataName" component={GoalsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
  export default AccountIndex;