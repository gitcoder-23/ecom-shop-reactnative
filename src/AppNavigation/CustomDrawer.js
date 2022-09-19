/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
  Alert,
} from 'react-native';
import {
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../redux/reducers/UserReducer';
import UserAvatar from 'react-native-user-avatar';

const CustomDrawer = props => {
  const dispatch = useDispatch();
  const {userItem, error} = useSelector(state => state.userAuth);

  console.log('userItem->', userItem);

  const logoutFunc = () => {
    dispatch(logout());
    if (error) {
      console.log('logout-Err->', error);
    }
    Alert.alert('', 'Logout success');
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* <TouchableHighlight> */}
      {userItem && userItem?.user && (
        <>
          <View style={[styles.profileImgContainerUser]}>
            {userItem?.user?.avatar?.url ? (
              <>
                <Image
                  source={{uri: userItem?.user?.avatar?.url}}
                  style={styles.logoImgUser}
                />
                <Text style={{fontSize: 18, color: '#000'}}>
                  {userItem?.user?.name}
                </Text>
              </>
            ) : (
              <View>
                <UserAvatar
                  size={100}
                  name={userItem?.user?.name}
                  bgColors={['#549979']}
                />
              </View>
            )}
          </View>
        </>
      )}
      {/* </TouchableHighlight> */}
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#e8e3e3'}}
        style={{width: '100%', marginBottom: 30}}>
        <View style={{flex: 1, backgroundColor: '#e8e3e3'}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderWidth: 1, borderTopColor: '#cccccc'}}>
        <TouchableOpacity
          onPress={() => logoutFunc()}
          style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="log-out-outline"
              size={30}
              style={[styles.packIcon]}
              color="#000"
            />
            <Text
              style={{
                fontSize: 17,
                fontWeight: Platform.OS === 'ios' ? '500' : '500',
                // fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-sarif',
                marginLeft: 15,
                color: '#000',
              }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  logoImg: {
    width: 60,
    height: 60,
    borderRadius: 120,
    marginLeft: 10,
    resizeMode: 'stretch',
  },
  logoImgUser: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderColor: '#333',
    borderWidth: 1,
    resizeMode: 'cover',
  },

  profileImgContainerUser: {
    borderRadius: 20,
    borderColor: '#b09690',
    alignItems: 'center',
    margin: '10%',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  profileImgContainer: {
    height: 100,
    width: 100,
    borderRadius: 150,
    borderWidth: 2,
    // backgroundColor: '#0d283f',
    borderColor: '#b09690',
    alignItems: 'center',
    margin: '10%',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  packIcon: {
    fontSize: 24,
    marginLeft: 10,
    fontWeight: Platform.OS === 'ios' ? '500' : '500',
  },
});
