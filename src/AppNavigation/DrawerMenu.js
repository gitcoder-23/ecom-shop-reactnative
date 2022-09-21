import {Platform, StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDrawer from './CustomDrawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TabNavigator from './TabNavigator';
import ProductScreen from '../screens/Product/ProductScreen';
import WishListScreen from '../screens/WishList/WishListScreen';
import CartScreen from '../screens/CartScreen/CartScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Drawer = createDrawerNavigator();

const DrawerMenu = ({navigation}) => {
  return (
    <>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          // headerStyle: {
          //   backgroundColor: 'transparent',
          //   elevation: 4,
          //   shadowOpacity: 0,
          // },
          // headerShadowVisible: true,
          // headerTitleAlign: 'center',
          // headerTintColor: '#00547b',
          // headerTitle: '',
          // drawerActiveBackgroundColor: '#00547b',
          drawerActiveBackgroundColor: '#3BB77E',
          drawerActiveTintColor: '#fff',
          // it makes {color}
          // drawerInactiveTintColor: '#00547b',
          drawerInactiveTintColor: '#000',
          drawerItemStyle: {
            borderRadius: 8,
          },
          drawerContentContainerStyle: {
            // marginHorizontal: '5%',
          },
          drawerStyle: {
            backgroundColor: '#e8e3e3',
            width: 220,
          },
          drawerLabelStyle: {
            marginLeft: -20,
            fontSize: 15,
            fontWeight: 'bold',
            // fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto-medium',
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={TabNavigator}
          options={{
            drawerIcon: ({color}) => {
              return (
                <>
                  <Icon
                    name="home-outline"
                    size={30}
                    style={[styles.packIcon, {color}]}
                    // color={props.focused}
                  />
                </>
              );
            },
          }}
        />

        <Drawer.Screen
          name="Products"
          component={ProductScreen}
          options={{
            // unmountOnBlur: true,
            drawerIcon: ({color}) => (
              <>
                <MaterialCommunityIcons
                  name="cupcake"
                  size={30}
                  style={[styles.packIcon, {color}]}
                />
              </>
            ),
          }}
        />
        <Drawer.Screen
          name="WishList"
          component={WishListScreen}
          options={{
            // unmountOnBlur: true,
            drawerIcon: ({color}) => (
              <>
                <Icon
                  name="heart-outline"
                  size={30}
                  style={[styles.packIcon, {color}]}
                />
              </>
            ),
          }}
        />
        <Drawer.Screen
          name="Cart"
          component={CartScreen}
          options={{
            unmountOnBlur: true,

            title: 'Cart',
            headerTitle: 'Cart',
            drawerIcon: ({color}) => (
              <>
                <Icon
                  name="cart-outline"
                  size={30}
                  style={[styles.packIcon, {color}]}
                />
              </>
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            unmountOnBlur: true,

            title: 'Profile',
            headerTitle: 'Profile',
            drawerIcon: ({color}) => (
              <>
                <Icon
                  name="person-circle-outline"
                  size={30}
                  style={[styles.packIcon, {color}]}
                />
              </>
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({
  icon: {
    // width: 22,
    // height: 22,
    marginLeft: 10,
  },
  localIcon: {
    width: 16,
    height: 16,
    marginLeft: 10,
  },
  headerRightIcon: {
    fontSize: 24,
    marginLeft: 10,
    color: '00547b',
  },
  packIcon: {
    fontSize: 24,
    marginLeft: 10,
  },
  innerScreenHead: {
    marginLeft: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#BBBDC1',
    borderRadius: 12,
  },
});
