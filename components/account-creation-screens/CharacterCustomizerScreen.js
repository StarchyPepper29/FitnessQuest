import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import CCustomizer from '../Character-Customizer/CCindex';

const CharacterCustomizerScreen = ({ navigation, route }) => {
  const [currentImagePath, setCurrentImagePath] = useState('');

  const handleSave = () => {
    console.log('Current Image Path:', currentImagePath);
    navigation.goBack({imagePath: currentImagePath});
    // Additional actions with the currentImagePath can be performed here
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Character Customizer Screen</Text>
      <CCustomizer onImagePathChange={setCurrentImagePath} />

      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default CharacterCustomizerScreen;
