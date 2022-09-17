import {View, Text, Platform, StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import DrawerMenu from './DrawerMenu';
import LoginScreen from '../screens/AuthScreen/LoginScreen';
import SignupScreen from '../screens/AuthScreen/SignupScreen';
import SplashScreen from '../screens/AuthScreen/SplashScreen';
import ForgetPasswordScreen from '../screens/AuthScreen/ForgetPasswordScreen';

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
        {/* <Stack.Navigator initialRouteName="ButtonTab"> */}

        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen
            name="Forgot"
            component={ForgetPasswordScreen}
            options={{...myOptions, headerShown: true}}
          />
          {/* <Stack.Screen
            name="Auth"
            component={Login}
            options={{...myOptions, headerShown: false}}
          /> */}
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
