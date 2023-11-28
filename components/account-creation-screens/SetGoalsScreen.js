import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import  {app,db ,getFirestore,collection, addDoc} from '../../firebasec';

const SetGoalsScreen = ({ navigation, route })  => {

  const AddtoDB = async() => {
    //Submit the form
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name:route.params.name, 
        nickname:route.params.nickname, 
        age:route.params.age, 
        gender:route.params.gender, 
        height:route.params.height, 
        weight:route.params.weight, 
        activityLevel:route.params.activityLevel, 
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

    return (
        <View style={AWstyles}>
          
          
          <Text>Where to Next</Text>
          
          <Button
            title="Set Goals"
            
            onPress={() => navigation.navigate('GoalsDataName',route.params)}
          />
    
          <Button
            title="Save and Continue to App"
            onPress={() => {
              AddtoDB();
              // Add logic here for saving data and navigating to the main app
             // navigation.navigate('MainAppScreen'); // Replace 'MainAppScreen' with your main app screen
            }}
          />
    
          <Button
            title="Sync My Fitness Pal"
            onPress={() => {

              AddtoDB();
              // Add logic here for syncing with My Fitness Pal
              // This could be an API call or another process for syncing data
              // Display a message or perform necessary actions for syncing
              Alert.alert('Syncing with My Fitness Pal...');
            }}
          />
        </View>
      );
};

const AWstyles = { flex: 1, alignItems: 'center', justifyContent: 'center' };

export default SetGoalsScreen;
