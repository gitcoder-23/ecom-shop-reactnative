import {View, Text, Platform, StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AuthScreen from '../screens/AuthScreen/AuthScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();
const myOptions = {
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#333',
    height: Platform.OS === 'ios' ? 60 : 50,
  },
  headerTitleAlign: 'center',

  headerTitleStyle: {
    fontSize: 25,
    fontWeight: Platform.OS === 'ios' ? '500' : '100',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-sarif',
  },
};

const StackNav = () => {
  return (
    <>
      <View style={styles.container}>
        {/* <Stack.Navigator initialRouteName="Tabs"> */}
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={TabNavigator}
            options={{...myOptions, headerShown: false}}
          />
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={{...myOptions, headerShown: false}}
          />
        </Stack.Navigator>
      </View>
    </>
  );
};

export default StackNav;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  innerScreenHead: {
    marginLeft: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#BBBDC1',
    borderRadius: 12,
  },
});
