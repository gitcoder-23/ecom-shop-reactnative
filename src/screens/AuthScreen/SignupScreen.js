import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Platform,
  Keyboard,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import {userSignupAction} from '../../redux/actions/UserAction';
import {useDispatch} from 'react-redux';
import ImageCropPicker from 'react-native-image-crop-picker';

var {width} = Dimensions.get('window');

const SignupScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatarImage, setAvatarImage] = useState(
    'https://mern-nest-ecommerce.herokuapp.com/profile.png',
  );

  const uploadCameraImage = async () => {
    try {
      await ImageCropPicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
        compressImageQuality: 0.8,
      }).then(image => {
        console.warn('cropedCamimg->', image);
        setAvatarImage(image.path);
      });
    } catch (error) {
      console.log('img-crop-err->', error);
    }
  };

  const uploadLibraryImage = async () => {
    try {
      await ImageCropPicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        compressImageQuality: 0.8,
      }).then(image => {
        console.warn('cropedLibimg->', image);
        setAvatarImage(image.path);
      });
    } catch (error) {
      console.log('img-crop-err->', error);
    }
  };

  console.log(avatarImage);

  const registerUser = () => {
    Keyboard.dismiss();
    if (!userName || !email || !password) {
      Alert.alert('', 'Please fill all fields');
    } else {
      const postSignup = {
        name: userName,
        email: email,
        password: password,
        avatar: avatarImage,
        // avatar:
        //   'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      };
      console.log('postSignup->', postSignup);
      dispatch(userSignupAction(postSignup))
        .unwrap()
        .then(signupRes => {
          console.log('signupRes->', signupRes);
          if (signupRes?.success === true) {
            Alert.alert('', 'New user created');
            navigation.navigate('Login');
          } else if (signupRes?.success === false) {
            Alert.alert('', 'User already exists');
            navigation.navigate('Signup');
          } else {
            return;
          }
        })
        .catch(err => {
          console.log('signuperr->', err);
          Alert.alert('', 'Something went wrong');
          navigation.navigate('Signup');
        });
    }
  };

  useEffect(() => {
    setAvatarImage('https://mern-nest-ecommerce.herokuapp.com/profile.png');
  }, [dispatch]);

  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.LoginHeader}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '700',
            fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
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
          Crate an account to continue!
        </Text>
      </View>
      <View style={styles.LoginBox}>
        <View style={styles.relative}>
          <Icon name="person-circle-outline" size={25} style={styles.icon} />
          <TextInput
            placeholder="Write your name..."
            placeholderTextColor="#333"
            style={styles.inputBox}
            value={userName}
            onChangeText={text => setUserName(text)}
            textContentType="name"
          />
        </View>
        <View style={styles.relative}>
          <Icon name="mail-open-outline" size={25} style={styles.icon} />
          <TextInput
            placeholder="Write your email..."
            placeholderTextColor="#333"
            style={styles.inputBox}
            value={email}
            onChangeText={text => setEmail(text)}
            textContentType="emailAddress"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.relative}>
          <Icon name="lock-closed-outline" size={25} style={styles.icon} />
          <TextInput
            placeholder="Write your password..."
            placeholderTextColor="#333"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.inputBox}
            textContentType="password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.relative}>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: avatarImage}}
              style={{
                width: 40,
                height: 40,
                borderRadius: 80,
                resizeMode: 'contain',
                borderWidth: 1,
                borderColor: '#999',
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: width - 95,
              }}>
              <TouchableOpacity onPress={uploadCameraImage}>
                <View
                  style={{
                    marginLeft: 10,
                    height: 50,
                    width: width * 1 - 270,
                    backgroundColor: '#f5f5f5',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                    flexDirection: 'row',
                  }}>
                  <View style={{marginRight: 2}}>
                    <Icon
                      name="ios-camera-outline"
                      size={25}
                      style={{color: '#FB578E'}}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#333',
                        fontSize: 15,
                      }}>
                      Take Photo
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={uploadLibraryImage}>
                <View
                  style={{
                    marginLeft: 10,
                    height: 50,
                    // width: width / 3,
                    width: width * 1 - 240,
                    backgroundColor: '#f5f5f5',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                    flexDirection: 'row',
                  }}>
                  <View style={{marginRight: 2}}>
                    <Icon
                      name="folder-outline"
                      size={25}
                      style={{color: '#FB578E'}}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#333',
                        fontSize: 15,
                      }}>
                      Choose From Library
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            {/* <TouchableOpacity onPress={uploadImage}>
              <View
                style={{
                  marginLeft: 10,
                  height: 50,
                  width: width * 1 - 100,
                  backgroundColor: '#f5f5f5',
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 18,
                  }}>
                  Choose Photo
                </Text>
              </View>
            </TouchableOpacity> */}
          </View>
          <TouchableOpacity onPress={registerUser}>
            <View style={styles.Button}>
              <Text style={{color: '#fff', fontSize: 18}}>Sign Up</Text>
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
          Already have a account ?
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={{
              fontSize: 15,
              color: '#FB578E',
              paddingRight: 15,
            }}>
            {' '}
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

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
    marginTop: width / 14,
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
