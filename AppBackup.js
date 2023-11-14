import * as React from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native'; // Import TextInput
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/*import RegistrationForm from './FormReg'; */

function HomeScreen({ navigation }) {
  return (
    <View style={AWstyles}>
      <Text>Welcome to Fitness Quest</Text>
      <Text>An App where we do super cool things</Text>
      <Button title="Let's go!"  onPress={() => navigation.navigate('Screen1Name')}></Button>
    </View>
  );
}

function Screen1({ navigation }) {
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
}

function BioDataScreen({ route, navigation }) {
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [activityLevel, setActivityLevel] = React.useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tell us about your body huehue</Text>
      
      <TextInput
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={(text) => setHeight(text)}
      />
      <TextInput
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />

      <Picker
        selectedValue={activityLevel}
        onValueChange={(itemValue, itemIndex) => setActivityLevel(itemValue)}>
        <Picker.Item label="Select Activity Level" value="" />
        <Picker.Item label="Sedentary" value="sedentary" />
        <Picker.Item label="Lightly Active" value="lightly_active" />
        <Picker.Item label="Moderately Active" value="moderately_active" />
        <Picker.Item label="Very Active" value="very_active" />
        <Picker.Item label="Super Active" value="super_active" />
      </Picker>

      <Button
        title="NEXT TO GOALS"
        onPress={() => {
          // Handle navigation or data processing here
          navigation.navigate('ContinueName');
        }}
      />
    </View>
  );
}

function SetGoalsScreen({route, navigation }) {
  return (
    <View style={AWstyles}>
      <Text>Where to Next</Text>
      
      <Button
        title="Set Goals"
        onPress={() => navigation.navigate('GoalsDataName')}
      />

      <Button
        title="Save and Continue to App"
        onPress={() => {
          // Add logic here for saving data and navigating to the main app
         // navigation.navigate('MainAppScreen'); // Replace 'MainAppScreen' with your main app screen
        }}
      />

      <Button
        title="Sync My Fitness Pal"
        onPress={() => {
          // Add logic here for syncing with My Fitness Pal
          // This could be an API call or another process for syncing data
          // Display a message or perform necessary actions for syncing
          Alert.alert('Syncing with My Fitness Pal...');
        }}
      />
    </View>
  );
}


function GoalsScreen({ navigation }) {
  const [goal, setGoal] = React.useState('');
  const [targetWeight, setTargetWeight] = React.useState('');
  const [workoutTime, setWorkoutTime] = React.useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>GOALS FORM</Text>
      
      <Picker
        selectedValue={goal}
        onValueChange={(itemValue, itemIndex) => setGoal(itemValue)}>
        <Picker.Item label="Select Goal" value="" />
        <Picker.Item label="Lose Weight" value="lose_weight" />
        <Picker.Item label="Gain Weight" value="gain_weight" />
        <Picker.Item label="Maintain Weight" value="maintain_weight" />
        {/* Add more options if needed */}
      </Picker>

      <TextInput
        placeholder="Target Weight (kg)"
        keyboardType="numeric"
        value={targetWeight}
        onChangeText={(text) => setTargetWeight(text)}
      />

      <Picker
        selectedValue={workoutTime}
        onValueChange={(itemValue, itemIndex) => setWorkoutTime(itemValue)}>
        <Picker.Item label="Select Workout Time" value="" />
        <Picker.Item label="30 mins/day" value="30" />
        <Picker.Item label="1 hour/day" value="60" />
        <Picker.Item label="2 hours/day" value="120" />
        {/* Add more options if needed */}
      </Picker>

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
        <Stack.Screen name="WelcomeName" component={HomeScreen}/>
        <Stack.Screen name="Screen1Name" component={Screen1} options={{ title: 'Overview' }} />
        <Stack.Screen name="BioDataName" component={BioDataScreen} />
        <Stack.Screen name="ContinueName" component={SetGoalsScreen} />
        <Stack.Screen name="GoalsDataName" component={GoalsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AWstyles = { flex: 1, alignItems: 'center', justifyContent: 'center' };


export default App;
