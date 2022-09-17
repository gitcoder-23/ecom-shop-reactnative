import {
  Alert,
  Dimensions,
  Keyboard,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {userLoginAction} from '../../redux/actions/UserAction';
import {useEffect} from 'react';

var {width} = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {isLoading, error, isAuthenticated, loginItem, errorMessage} =
    useSelector(state => state.userAuth);
  // console.log('loginItem->', loginItem);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginSubmit = () => {
    Keyboard.dismiss();
    if (!email || !password) {
      Alert.alert('', 'Please fill all fields');
    } else {
      const postLogin = {
        email: email,
        password: password,
      };
      // console.log('postLogin->', postLogin);
      dispatch(userLoginAction({postLogin}))
        .unwrap()
        .then(loginRes => {
          console.log('loginResp->', loginRes);
        })
        .catch(err => {
          console.log('loginerr->', err);
          Alert.alert('', 'Something went wrong invalid credential');
        });
    }
  };

  useEffect(() => {}, [dispatch, error, isAuthenticated]);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.LoginHeader}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '700',
              fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
              color: '#333',
            }}>
            Welcome,
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
              color: '#555',
            }}>
            Sign in to continue!
          </Text>
        </View>
        <View style={styles.LoginBox}>
          <View style={styles.relative}>
            <Icon name="mail-open-outline" size={25} style={styles.icon} />
            <TextInput
              placeholder="Write your email..."
              placeholderTextColor="#333"
              style={styles.inputBox}
              textContentType="emailAddress"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.relative}>
            <Icon name="lock-closed-outline" size={25} style={styles.icon} />
            <TextInput
              placeholder="Write your password..."
              placeholderTextColor="#333"
              style={styles.inputBox}
              textContentType="password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            <Text
              style={{
                textAlign: 'right',
                color: '#333',
                fontSize: 15,
              }}
              onPress={() => navigation.navigate('Forgot')}>
              Forgot Password ?
            </Text>
            <TouchableOpacity onPress={loginSubmit}>
              <View style={styles.Button}>
                <Text style={{color: '#fff', fontSize: 18}}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: width / 6 - 20,
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{
              color: '#333',
              fontSize: 15,
            }}>
            Not have any account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text
              style={{
                fontSize: 15,
                color: '#FB578E',
                paddingRight: 15,
              }}>
              {' '}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    padding: 20,
    backgroundColor: '#e5e5e5',
    height: width * 2,
  },
  LoginHeader: {
    width: width * 1,
    paddingTop: width / 5,
    paddingLeft: 10,
  },
  inputBox: {
    width: width * 1 - 50,
    height: Platform.OS === 'ios' ? 50 : 'auto',
    borderWidth: 1,
    borderRadius: 15,
    // borderColor: '#FB578E',
    borderColor: '#3BB77E',
    paddingLeft: 45,
    fontSize: 15,
    color: '#333',
    marginVertical: 10,
  },
  relative: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 10,
    color: '#FB578E',
  },
  LoginBox: {
    marginTop: width / 6,
  },
  Button: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#3BB77E',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
