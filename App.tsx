/* eslint-disable react-native/no-inline-styles */
// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useHeaderHeight} from '@react-navigation/elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function HomeScreen() {
  const headerHeight = useHeaderHeight();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
      <Text>Home Screen</Text>
      <View
        style={{
          width: '100%',
          height: headerHeight,
          backgroundColor: 'red',
        }}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
