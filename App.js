import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/account-creation-screens/HomeScreen'; // Import your HomeScreen component
import Screen1 from './components/account-creation-screens/Screen1'; // Import your Screen1 component
import BioDataScreen from './components/account-creation-screens/BioDataScreen';
import SetGoalsScreen  from './components/account-creation-screens/SetGoalsScreen';
import GoalsScreen from './components/account-creation-screens/GoalsScreen';
import LogIndex from './components/Login2/Login-index';
import AccountIndex from './components/account-creation-screens/Account-index';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AccountIndex/>
  );
};

export default App;
