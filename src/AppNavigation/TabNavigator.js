/* eslint-disable react-native/no-inline-styles */
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProductScreen from '../screens/Product/ProductScreen';
import WishListScreen from '../screens/WishList/WishListScreen';
import CartScreen from '../screens/CartScreen/CartScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const {isAuthenticated, userItem, isLoading} = useSelector(
    state => state.userAuth,
  );

  // console.log('userItem->', userItem);
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            elevation: 8,
            // backgroundColor: 'red',
            // height: 20,
          },
        }}
        // style={styles.bottomTab}
      >
        <Tab.Screen
          name="Dashboard"
          component={HomeScreen}
          options={({route}) => ({
            // headerShown: false,
            // tabBarStyle: {display: Visibility(route)},
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../assets/BottomTab/home.png')}
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                    marginTop: 5,
                    tintColor: focused ? 'crimson' : 'black',
                  }}
                />
                <Text style={{color: focused ? 'crimson' : 'black'}}>Home</Text>
              </View>
            ),
          })}
        />
        <Tab.Screen
          name="Product"
          component={ProductScreen}
          options={({route}) => ({
            // headerShown: false,
            // tabBarStyle: {display: Visibility(route)},
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../assets/BottomTab/shop.png')}
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                    marginTop: 5,
                    tintColor: focused ? 'crimson' : 'black',
                  }}
                />
                <Text style={{color: focused ? 'crimson' : 'black'}}>
                  Products
                </Text>
              </View>
            ),
          })}
        />
        <Tab.Screen
          name="WishList"
          component={WishListScreen}
          options={({route}) => ({
            // headerShown: false,
            // tabBarStyle: {display: Visibility(route)},
            tabBarBadge: 2,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../assets/BottomTab/heart.png')}
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                    marginTop: 5,
                    tintColor: focused ? 'crimson' : 'black',
                  }}
                />
                <Text style={{color: focused ? 'crimson' : 'black'}}>
                  WishList
                </Text>
              </View>
            ),
          })}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={({route}) => ({
            // headerShown: false,
            // tabBarStyle: {display: Visibility(route)},
            tabBarBadge: 1,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../assets/BottomTab/cart.png')}
                  style={{
                    width: 25,
                    height: 25,
                    resizeMode: 'contain',
                    marginTop: 5,
                    tintColor: focused ? 'crimson' : 'black',
                  }}
                />
                <Text style={{color: focused ? 'crimson' : 'black'}}>Cart</Text>
              </View>
            ),
          })}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={({route}) => ({
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {userItem && userItem?.user?.avatar?.url ? (
                  <Image
                    // source={require('../assets/BottomTab/user.jpg')}
                    source={{uri: userItem?.user?.avatar?.url}}
                    style={{
                      width: 40,
                      height: 40,
                      marginTop: -10,
                      borderRadius: 50,
                    }}
                  />
                ) : (
                  <AntDesign
                    name={'user'}
                    color={focused ? 'crimson' : 'black'}
                    size={25}
                    style={{
                      marginTop: 5,
                    }}
                  />
                )}

                <Text style={{color: focused ? 'crimson' : 'black'}}>
                  Profile
                </Text>
              </View>
            ),
          })}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  bottomTab: {elevation: 8},
});
