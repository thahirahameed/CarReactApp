/**
 * Car React App
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './navigation';

import {View} from 'react-native';

function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

export default App;
