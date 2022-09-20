/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-catch-shadow */
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {userForgetPassAction} from '../../redux/actions/UserAction';

var {width} = Dimensions.get('window');

const ForgetPasswordScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {errorMessage, error, message, forgetPassItem, isForgetPassLoading} =
    useSelector(state => state.forgetPass);

  console.log('forgetPassItem->', forgetPassItem);
  const [email, setEmail] = useState('');

  const forGetPassword = async () => {
    if (!email) {
      Alert.alert('', 'Please fill all fields');
    } else {
      try {
        const postForgetPass = {
          email: email,
        };
        console.log('postForgetPass->', postForgetPass);
        await dispatch(userForgetPassAction(postForgetPass));
        Alert.alert('', 'Email send successfully', [
          {
            text: 'OK',
            onPress: () => {
              setEmail('');
              navigation?.goBack();
            },
          },
        ]);
      } catch (err) {
        console.log('forgetpass-error->', err);
        Alert.alert('', 'Something went wrong!');
        navigation.navigate('Forgetpass');
      }
    }
  };

  React.useEffect(() => {
    if (error) {
      console.log('loadforgotPass->', error);
    }
    // if (!forgetPassItem) {
    //   if (forgetPassItem.success === false) {
    //     console.log(errorMessage);
    //   }
    // } else if (!forgetPassItem?.message) {
    //   console.log(errorMessage);
    // } else {
    //   Alert.alert('', `${forgetPassItem?.message}`, [
    //     {
    //       text: 'OK',
    //       onPress: () => {
    //         setEmail('');
    //         // navigation?.goBack();
    //         navigation.navigate('Login');
    //       },
    //     },
    //   ]);
    // }
  }, [error, errorMessage, message]);

  return (
    <>
      {/* {isForgetPassLoading ? (
        <Text>Loading</Text>
      ) : ( */}
      <>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.LoginHeader}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
                  color: '#555',
                }}>
                Forget Password
              </Text>
            </View>
            <TextInput
              placeholder="Write your email..."
              placeholderTextColor="#333"
              style={styles.forgot}
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity onPress={forGetPassword} style={styles.button}>
              <View>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 20,
                    fontWeight: '600',
                    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
                  }}>
                  Submit
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                justifyContent: 'flex-end',
              }}>
              <Text
                style={{
                  color: '#333',
                  fontSize: 15,
                }}>
                Have an account ?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#FB578E',
                    paddingRight: 15,
                  }}>
                  {' '}
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>
      {/* )} */}
    </>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: width * 1,
    height: width * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgot: {
    width: width * 1 - 80,
    height: 50,
    borderColor: '#3BB77E',
    borderWidth: 1,
    color: '#333',
    borderRadius: 10,
    paddingLeft: 15,
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#3BB77E',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  LoginHeader: {
    marginBottom: 10,
  },
});
