import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

const HairSelector = () => {
  const [selectedHairIndex, setSelectedHairIndex] = useState(0);
  const hairImages = [
    // require('../images/h1.png'),
    // require('../images/h1.png'),
    // require('../images/hair3.png'),
    // Add more image URIs here
  ];

  const handlePrev = () => {
    setSelectedHairIndex((prevIndex) => (prevIndex - 1 + hairImages.length) % hairImages.length);
  };

  const handleNext = () => {
    setSelectedHairIndex((prevIndex) => (prevIndex + 1) % hairImages.length);
    
  };

  return (
    <View style={styles.hairSelector}>
      <Button title="Previous" onPress={handlePrev} />
      <Image source={hairImages[selectedHairIndex]} style={styles.hairImage} />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  hairSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hairImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default HairSelector;
