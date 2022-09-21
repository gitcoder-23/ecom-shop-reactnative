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
  const {message, forgetPassItem} = useSelector(state => state.forgetPass);

  const [email, setEmail] = useState('');

  const forGetPassword = () => {
    if (!email) {
      Alert.alert('', 'Please fill all fields');
    } else {
      const postForgetPass = {
        email: email,
      };
      dispatch(userForgetPassAction(postForgetPass))
        .unwrap()
        .then(resp => {
          Alert.alert('', `${resp?.message}`, [
            {
              text: 'OK',
              onPress: () => {
                setEmail('');
                navigation?.goBack();
              },
            },
          ]);
        })
        .catch(err => {
          console.log('err->', err);
          Alert.alert('', 'Something went wrong!');
          navigation.navigate('Forgetpass');
        });
    }
  };

  return (
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
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: width * 1,
    height: width * 1.5,
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
