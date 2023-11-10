// In App.js in a new project

import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native'; // Import TextInput
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  const [name, setName] = React.useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button
        title="NEXT TO BIODATA"
        onPress={() => navigation.navigate('BioDataName', { name })}
      />
    </View>
  );
}

function BioDataScreen({ route, navigation }) {
  const name = route.params?.name;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>BIODATA FORM</Text>
      <Text>Name from HomeScreen: {name}</Text>
      <Button
        title="NEXT TO GOALS"
        onPress={() => navigation.navigate('GoalsDataName')}
      />
    </View>
  );
}

function GoalsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>GOALS FORM</Text>
      <Button
        title="Back Home"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
        <Stack.Screen name="BioDataName" component={BioDataScreen} />
        <Stack.Screen name="GoalsDataName" component={GoalsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
