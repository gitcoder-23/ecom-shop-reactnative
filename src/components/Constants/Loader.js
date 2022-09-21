import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

var {width} = Dimensions.get('window');
var height = Dimensions.get('window').height;

const Loader = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/splash/loader.json')}
        autoPlay
        loop
        style={styles.loader}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height * 1,
    width: width * 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loader: {
    position: 'absolute',
    bottom: -50,
    left: Platform.OS === 'ios' ? 5 : 10,
    backgroundColor: 'transparent',
    opacity: 0.9,
  },
});
