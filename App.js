import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

// Screens
import HistoryScreen from './app/HistoryScreen';
import SearchScreen from './app/SearchScreen';
import TransferScreen from './app/TransferScreen';
import TestScreen from './app/TestScreen';

const Stack = createStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="TransferScreen" >
        <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="TransferScreen" component={TransferScreen} />
        <Stack.Screen name="TestScreen" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

export default App;