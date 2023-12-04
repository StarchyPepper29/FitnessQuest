// HeadSelector.js

import React, { useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

const HeadSelector = ({ onHeadChange }) => {
  const [selectedHeadIndex, setSelectedHeadIndex] = useState(0);

  const headImages = [
    require('../images/h1.png'),
    require('../images/h2.png'),
    require('../images/h3.png')
    // Add more image URIs here
  ];

  useEffect(() => {
    // Notify the parent component about the updated head image
    onHeadChange(headImages[selectedHeadIndex]);
  }, [selectedHeadIndex, headImages, onHeadChange]);

  const handlePrev = () => {
    setSelectedHeadIndex((prevIndex) => (prevIndex - 1 + headImages.length) % headImages.length);
  };

  const handleNext = () => {
    setSelectedHeadIndex((prevIndex) => (prevIndex + 1) % headImages.length);
  };

  return (
    <View style={styles.headSelector}>
      <Button title="Previous" onPress={handlePrev} />
      <Image source={headImages[selectedHeadIndex]} style={styles.headImage} />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  headSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default HeadSelector;
