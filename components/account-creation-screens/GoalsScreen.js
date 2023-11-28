import React from 'react';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import  {app,db ,getFirestore,collection, addDoc} from '../../firebasec';

const GoalsScreen = ({ navigation, route }) => {
  const AddtoDB = async() => {
    //Submit the form
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name:route.params.name||null, 
        nickname:route.params.nickname||null, 
        age:route.params.age||null, 
        gender:route.params.gender||null, 
        height:route.params.height||null, 
        weight:route.params.weight||null, 
        activityLevel:route.params.activityLevel||null, 
        goal:route.params.goal||null, 
        targetWeight:route.params.targetWeight||null, 
        workoutTime:route.params.workoutTime||null 
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

    const [goal, setGoal] = React.useState('');
    const [targetWeight, setTargetWeight] = React.useState('');
    const [workoutTime, setWorkoutTime] = React.useState('');
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>GOALS FORM</Text>
        <Text>{route.params.weight}</Text>
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
        title="Submit"
        onPress={()=> AddtoDB()}
        />
        <Button
          title="Back Home"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
};
const AWstyles = { flex: 1, alignItems: 'center', justifyContent: 'center' };
export default GoalsScreen;
