import { SafeAreaView, View } from 'react-native';

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/index';
import { Colors } from './src/styles/colors';
import { globalStyle } from './src/styles/global-style';

const App = () => {
  return (
    <SafeAreaProvider
      initialMetrics={{
        frame: {x: 0, y: 0, width: 0, height: 0},
        insets: {top: 0, left: 0, right: 0, bottom: 0},
      }}>
      <View style={globalStyle.appContainer}>
        <SafeAreaView style={{backgroundColor: Colors.dark_blue}} />
        <AppNavigator />
      </View>
    </SafeAreaProvider>
  );
};

export default App;
