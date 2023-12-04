import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

const PantsSelector = () => {
  const [selectedPantsIndex, setSelectedPantsIndex] = useState(0);
  const pantsImages = [
    require('../images/pants1.png'),
    require('../images/pants2.png'),
    require('../images/pants3.png'),
    // Add more image URIs here
  ];

  const handlePrev = () => {
    setSelectedPantsIndex((prevIndex) => (prevIndex - 1 + pantsImages.length) % pantsImages.length);
  };

  const handleNext = () => {
    setSelectedPantsIndex((prevIndex) => (prevIndex + 1) % pantsImages.length);
  };

  return (
    <View style={styles.pantsSelector}>
      <Button title="Previous" onPress={handlePrev} />
      <Image source={pantsImages[selectedPantsIndex]} style={styles.pantsImage} />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  pantsSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pantsImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default PantsSelector;
