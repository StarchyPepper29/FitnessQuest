import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

const ShoesSelector = () => {
  const [selectedShoesIndex, setSelectedShoesIndex] = useState(0);
  const shoesImages = [
    require('../images/shoes1.png'),
    require('../images/shoes2.png'),
    require('../images/shoes3.png'),
    // Add more image URIs here
  ];

  const handlePrev = () => {
    setSelectedShoesIndex((prevIndex) => (prevIndex - 1 + shoesImages.length) % shoesImages.length);
  };

  const handleNext = () => {
    setSelectedShoesIndex((prevIndex) => (prevIndex + 1) % shoesImages.length);
  };

  return (
    <View style={styles.shoesSelector}>
      <Button title="Previous" onPress={handlePrev} />
      <Image source={shoesImages[selectedShoesIndex]} style={styles.shoesImage} />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  shoesSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shoesImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default ShoesSelector;
