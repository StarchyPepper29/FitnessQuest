import React from 'react';
import { View } from 'react-native';
import HeadSelector from './Components/head'; // Import your head selector component

const CCustomizer = ({ onImagePathChange }) => {
  const handleHeadChange = (updatedImagePath) => {
    
    onImagePathChange(updatedImagePath); // Pass the updated image path to the parent component
  };

  return (
    <View>
      {/* Other selectors like HairSelector, TorsoSelector, etc. */}
      <HeadSelector onHeadChange={handleHeadChange} />
    </View>
  );
};

export default CCustomizer;
