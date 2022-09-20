/* eslint-disable react-hooks/exhaustive-deps */
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MyStatusBar from './src/components/AppHeader/MyStatusBar';
import StackNav from './src/AppNavigation/StackNav';
import DrawerMenu from './src/AppNavigation/DrawerMenu';
import {resetInterceptor} from './src/rootApi';
import {userDataAction} from './src/redux/actions/UserAction';

const MainMenu = ({isAuthenticated, loginItem, userItem, isLoading}) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          // backgroundColor: '#333',
        }}>
        <MyStatusBar backgroundColor="#333" barStyle="light-content" />
        <NavigationContainer>
          <>
            {/* {isLoading ? (
              <View>
                <Text style={{color: '#000', fontSize: 15}}>Loadig...</Text>
              </View>
            ) : ( */}
            <>{isAuthenticated === false ? <StackNav /> : <DrawerMenu />}</>
            {/* )} */}
          </>
        </NavigationContainer>
      </View>
    </>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const {isAuthenticated, loginItem, userItem, isLoading} = useSelector(
    state => state.userAuth,
  );

  React.useEffect(() => {
    if (loginItem.token) {
      resetInterceptor(loginItem.token);
    }
  }, [loginItem, isAuthenticated]);

  useEffect(() => {
    dispatch(userDataAction());
  }, [dispatch]);

  return (
    <>
      <MainMenu
        loginItem={loginItem}
        isAuthenticated={isAuthenticated}
        userItem={userItem}
        isLoading={isLoading}
      />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
