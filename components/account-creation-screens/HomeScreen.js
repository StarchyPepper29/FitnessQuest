import React from 'react';
import { View, Text, Button } from 'react-native'


const HomeScreen = ({ navigation }) => {
    return (
        <View style={AWstyles}>
          <Text>Welcome to Fitness Quest</Text>
          <Text>An App where we do super cool things</Text>
          <Button title="Let's go!"  onPress={() => navigation.navigate('Screen1Name')}></Button>
        </View>
      );
};
const AWstyles = { flex: 1, alignItems: 'center', justifyContent: 'center' };

export default HomeScreen;