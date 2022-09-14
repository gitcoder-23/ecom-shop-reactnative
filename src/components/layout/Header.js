import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Platform,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
var {width} = Dimensions.get('window');
const Header = ({navigation}) => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerFlex}>
        <TouchableOpacity
          onPress={() => {
            // navigation.openDrawer();
            console.log('touch');
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
    </View>
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
    marginTop: Platform.OS === 'ios' ? 50 : null,
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
