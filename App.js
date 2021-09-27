import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

// Screens
import HistoryScreen from './app/HistoryScreen';

const Stack = createStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HistoryScreen" >
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

export default App;