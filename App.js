import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import reducers from './src/reducers/index';
import { Main } from './src/components/main/Main';

const store = createStore(reducers);

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false,}}>
            <Stack.Screen name="Main" component={Main} />
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
