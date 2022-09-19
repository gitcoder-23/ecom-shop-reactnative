import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Platform,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
var {width} = Dimensions.get('window');
const Header = ({navigation}) => {
  // console.log('navigation-->', navigation);
  return (
    <SafeAreaView style={styles.headerMain}>
      <View style={styles.headerFlex}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Ionicons name="menu-outline" size={40} color="#333" />
        </TouchableOpacity>
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#333"
          style={styles.searchBox}
        />
        <TouchableOpacity>
          <Ionicons
            name="search-outline"
            size={30}
            color="#333"
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerMain: {
    width: width,
    height: width / 4 - 35,
    backgroundColor: '#fff',
    elevation: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: Platform.OS === 'android' ? 50 : null,
  },
  headerFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    width: width - 80,
    height: width / 7 - 15,
    backgroundColor: '#e5e5e5',
    marginHorizontal: 10,
    borderRadius: 25,
    fontSize: 15,
    color: '#333',
    paddingHorizontal: 10,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    bottom: -15,
    right: 20,
  },
});
