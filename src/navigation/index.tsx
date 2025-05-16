import {BottomTab} from './bottom-tab';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTab"
          options={{headerShown: false}}
          component={BottomTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
