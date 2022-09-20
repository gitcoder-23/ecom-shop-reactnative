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

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/splash/splash.png')}
          style={styles.img}
        />
      </View>
      <LottieView
        source={require('../../assets/splash/loader.json')}
        autoPlay
        loop
        style={styles.loader}
        // colorFilters={[
        //   {
        //     keypath: 'button',
        //     color: '#F00000',
        //   },
        //   {
        //     keypath: 'Sending Loader',
        //     color: '#F00000',
        //   },
        // ]}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height * 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: width * 1 - 150,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  loader: {
    position: 'absolute',
    bottom: -150,
    left: Platform.OS === 'ios' ? 5 : 20,
  },
});
