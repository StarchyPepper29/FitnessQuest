import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';

const SetGoalsScreen = ({ navigation }) => {
    return (
        <View style={AWstyles}>
          <Text>Where to Next</Text>
          
          <Button
            title="Set Goals"
            onPress={() => navigation.navigate('GoalsDataName')}
          />
    
          <Button
            title="Save and Continue to App"
            onPress={() => {
              // Add logic here for saving data and navigating to the main app
             // navigation.navigate('MainAppScreen'); // Replace 'MainAppScreen' with your main app screen
            }}
          />
    
          <Button
            title="Sync My Fitness Pal"
            onPress={() => {
              // Add logic here for syncing with My Fitness Pal
              // This could be an API call or another process for syncing data
              // Display a message or perform necessary actions for syncing
              Alert.alert('Syncing with My Fitness Pal...');
            }}
          />
        </View>
      );
};

export default SetGoalsScreen;
