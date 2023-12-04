import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

const TorsoSelector = () => {
  const [selectedTorsoIndex, setSelectedTorsoIndex] = useState(0);
  const torsoImages = [
    require('../images/torso1.png'),
    require('../images/torso2.png'),
    require('../images/torso3.png'),
    // Add more image URIs here
  ];

  const handlePrev = () => {
    setSelectedTorsoIndex((prevIndex) => (prevIndex - 1 + torsoImages.length) % torsoImages.length);
  };

  const handleNext = () => {
    setSelectedTorsoIndex((prevIndex) => (prevIndex + 1) % torsoImages.length);
  };

  return (
    <View style={styles.torsoSelector}>
      <Button title="Previous" onPress={handlePrev} />
      <Image source={torsoImages[selectedTorsoIndex]} style={styles.torsoImage} />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  torsoSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  torsoImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default TorsoSelector;
