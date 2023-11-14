import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';

const Screen1 = ({ navigation }) => {
    const [name, setName] = React.useState('');
    const [nickname, setNickname] = React.useState('');
    const [age, setAge] = React.useState('');
    const [gender, setGender] = React.useState('');
  
    // Function to check if all fields are filled
    const isDataValid = () => {
      return name.trim() !== '' && nickname.trim() !== '' && age.trim() !== '' && gender.trim() !== '';
    };
  
    return (
      <View style={AWstyles}>
        <Text>Tell us About Yourself</Text>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          placeholder="What shall WE call you"
          value={nickname}
          onChangeText={(text) => setNickname(text)}
        />
        <TextInput
          placeholder="Enter your age"
          keyboardType="numeric"
          value={age}
          onChangeText={(text) => setAge(text)}
        />
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
  
        <Button
          title="NEXT TO Continue"
          onPress={() => {
            if (isDataValid()) {
              navigation.navigate('BioDataName');
            } else {
              // Show an alert or message to indicate required fields
              Alert.alert('Please fill in all required fields.');
            }
          }}
          disabled={!isDataValid()} // Disable the button if data is not valid
        />
      </View>
    );
};

export default Screen1;
