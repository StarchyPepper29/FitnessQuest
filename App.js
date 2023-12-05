import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIndex from './components/Login2/Login-index';
import CCustomizer from './components/Character-Customizer/CCindex';
import AccountIndex from './components/account-creation-screens/Account-index';
import BottomTabNavigator from './components/HomeDrawers/Bott-Tabs-index';
import DrawerHome from './components/HomeDrawers/HomeDrawersindex';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <DrawerHome/>
    </NavigationContainer>
    
  );
};

export default App;
