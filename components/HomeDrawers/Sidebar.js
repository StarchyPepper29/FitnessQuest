// Sidebar.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Sidebar = ({ navigation }) => {
  const closeDrawer = () => {
    navigation.closeDrawer();
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF', padding: 20 }}>
      <TouchableOpacity onPress={closeDrawer}>
        <Text>Close Sidebar</Text>
      </TouchableOpacity>
      {/* Add your sidebar content here */}
    </View>
  );
};

export default Sidebar;
