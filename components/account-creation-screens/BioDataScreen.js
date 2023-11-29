import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';

const BioDataScreen = ({ navigation, route }) => {
    const [height, setHeight] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [activityLevel, setActivityLevel] = React.useState('');
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tell us about your body huehue</Text>
        
        <TextInput
          placeholder="Height (cm)"
          keyboardType="numeric"
          value={height}
          onChangeText={(text) => setHeight(text)}
        />
        <TextInput
          placeholder="Weight (kg)"
          keyboardType="numeric"
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
  
        <Picker
          selectedValue={activityLevel}
          onValueChange={(itemValue, itemIndex) => setActivityLevel(itemValue)}>
          <Picker.Item label="Select Activity Level" value="" />
          <Picker.Item label="Sedentary" value="sedentary" />
          <Picker.Item label="Lightly Active" value="lightly_active" />
          <Picker.Item label="Moderately Active" value="moderately_active" />
          <Picker.Item label="Very Active" value="very_active" />
          <Picker.Item label="Super Active" value="super_active" />
        </Picker>
  
        <Button
          title="NEXT TO GOALS"
          onPress={() => {
            const combinedProps = { height, weight, activityLevel, ...route.params };
            navigation.navigate('SetGoalsName', combinedProps);
          }}
        />
      </View>
    );
};
const AWstyles = { flex: 1, alignItems: 'center', justifyContent: 'center' };

export default BioDataScreen;
