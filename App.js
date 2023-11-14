import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/account-creation-screens/HomeScreen'; // Import your HomeScreen component
import Screen1 from './components/account-creation-screens/Screen1'; // Import your Screen1 component
import BioDataScreen from './components/account-creation-screens/BioDataScreen';
import SetGoalsScreen  from './components/account-creation-screens/SetGoalsScreen';
import GoalsScreen from './components/account-creation-screens/GoalsScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeName" component={HomeScreen} />
        <Stack.Screen name="Screen1Name" component={Screen1} />
        <Stack.Screen name="BioDataName" component={BioDataScreen} />
        <Stack.Screen name="ContinueName" component={SetGoalsScreen} />
        <Stack.Screen name="GoalsDataName" component={GoalsScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;
