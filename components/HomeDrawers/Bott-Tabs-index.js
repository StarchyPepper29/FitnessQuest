import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from './Tab1Screen';
import Tab2Screen from './Tab2Screen';
import Tab3Screen from './Tab3Screen';
import Tab4Screen from './Tab4Screen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab 1" component={Tab1Screen} />
      <Tab.Screen name="Tab 2" component={Tab2Screen} />
      <Tab.Screen name="Tab 3" component={Tab3Screen} />
      <Tab.Screen name="Tab 4" component={Tab4Screen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
