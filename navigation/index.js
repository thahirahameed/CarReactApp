import {} from 'react';
import {} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FirstScreen from '../screens/FirstScreen/index';
import AddRecordScreen from '../screens/AddRecordScreen/index';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="First Screen">
      <Stack.Group>
        <Stack.Screen
          name="firstScreen"
          component={FirstScreen}
          options={{title: 'First Screen'}}
        />
        <Stack.Screen
          name="addRecordScreen"
          component={AddRecordScreen}
          options={{title: 'Add Record Screen'}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Navigator;
