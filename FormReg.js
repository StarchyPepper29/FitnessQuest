import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const RegistrationForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const onRegisterPress = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Passwords don't match.");
      return;
    }

    try {
      const response = await auth().createUserWithEmailAndPassword(email, password);

      const uid = response.user.uid;
      const data = {
        id: uid,
        email,
        fullName,
      };

      await firestore().collection('users').doc(uid).set(data);

      navigation.navigate('Home', { user: data });
    } catch (error) {
      Alert.alert('Registration Failed', error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
      />
      <TextInput
        placeholder="Full Name"
        onChangeText={(text) => setFullName(text)}
        value={fullName}
      />
      <Button title="Register" onPress={onRegisterPress} />
    </View>
  );
};

export default RegistrationForm;
