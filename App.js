import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MyStatusBar from './src/components/AppHeader/MyStatusBar';
import StackNav from './src/AppNavigation/StackNav';
import DrawerMenu from './src/AppNavigation/DrawerMenu';

const MainMenu = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#333',
        }}>
        <MyStatusBar backgroundColor="#333" barStyle="light-content" />
        <NavigationContainer>
          {isAuthenticated ? <StackNav /> : <DrawerMenu />}
        </NavigationContainer>
      </View>
    </>
  );
};

const App = () => {
  return (
    <>
      <MainMenu />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
