import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import MyStatusBar from './src/components/AppHeader/MyStatusBar';
import StackNav from './src/AppNavigation/StackNav';
import DrawerMenu from './src/AppNavigation/DrawerMenu';
import {resetInterceptor} from './src/rootApi';

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
  const {isAuthenticated, loginItem} = useSelector(state => state.userAuth);
  // console.log('loginItem-app->', loginItem.token);

  React.useEffect(() => {
    if (loginItem.token) {
      resetInterceptor(loginItem.token);
    }
  }, [loginItem]);
  return (
    <>
      <MainMenu />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
