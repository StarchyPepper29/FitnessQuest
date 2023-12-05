import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from './Tab1Screen';
import Tab2Screen from './Tab2Screen';
import Tab3Screen from './Tab3Screen';
import Tab4Screen from './Tab4Screen';
import Sidebar from './Sidebar';    

const Tab = createBottomTabNavigator();

const DrawerHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <View style={[styles.sidebar, { display: isOpen ? 'flex' : 'none' }]}>
        <Sidebar/>
        {/* Add your sidebar content here */}
      </View>

      {/* Main Content */}
      <Tab.Navigator>
        <Tab.Screen name="Tab 1" component={Tab1Screen} />
        <Tab.Screen name="Tab 2" component={Tab2Screen} />
        <Tab.Screen name="Tab 3" component={Tab3Screen} />
        <Tab.Screen name="Tab 4" component={Tab4Screen} />
      </Tab.Navigator>

      {/* Toggle button/icon */}
      <TouchableOpacity onPress={toggleSidebar} style={styles.toggleButton}>
        {/* You can replace this with your icon */}
        <Text>Toggle</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 250, // Adjust width as needed
    backgroundColor: 'lightgray',
    zIndex: 100, // Ensure the sidebar is above other components
    padding: 20,
  },
  toggleButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 101, // Ensure the toggle button is above the sidebar
    padding: 10,
  },
});

export default DrawerHome;
