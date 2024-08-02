// navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro1 from './screens/Intro1';
import SignIn from './screens/SignIn';


const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="intro"
          component={Intro1}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
