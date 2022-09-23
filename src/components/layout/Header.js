import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Platform,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

var {width} = Dimensions.get('window');
var height = Dimensions.get('window').height;

const Header = ({navigation}) => {
  const {allProducts} = useSelector(state => state.productData);

  const [proData, setProData] = useState(allProducts ? allProducts : []);
  const [searchPro, setSearchPro] = useState('');

  const searchHandler = text => {
    if (text) {
      const newData =
        proData &&
        proData?.products?.filter(item => {
          const iteamData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return iteamData.indexOf(textData) > -1;
        });
      setProData(newData);
      setSearchPro(text);
    } else {
      setProData(allProducts);
      setSearchPro(text);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.headerMain}>
        <View style={styles.headerFlex}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="menu-outline" size={40} color="#333" />
          </TouchableOpacity>
          <TextInput
            placeholder="Search..."
            placeholderTextColor="#333"
            style={styles.searchBox}
            value={searchPro}
            onChangeText={text => searchHandler(text)}
          />
          <TouchableOpacity>
            <Icon
              name="search-outline"
              size={30}
              color="#333"
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {searchPro.length !== 0 ? (
        <>
          <ScrollView
            style={{
              position: 'absolute',
              width: '100%',
              left: 0,
              top: height / 8 - 40,
              zIndex: 100,
              height: height * 1,
              backgroundColor: 'rgba(61, 107, 115, 0.80)',
              paddingVertical: 10,
            }}>
            {allProducts.products.map((i, index) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProductDetails', {productItem: i})
                }
                key={index}>
                <View
                  style={{
                    marginVertical: 15,
                    marginHorizontal: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={{uri: i.images[0].url}}
                    style={{height: 40, width: 40}}
                  />
                  <Text
                    style={{
                      color: '#fff',
                      paddingLeft: 20,
                      fontWeight: '700',
                    }}>
                    {i.name}
                  </Text>
                  <Icon
                    name="star"
                    color="#fff"
                    size={18}
                    style={{marginLeft: 20}}
                  />
                  <Text style={{color: '#fff', paddingLeft: 5}}>
                    ({i.numOfReviews})
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </>
      ) : null}
    </>
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
    marginTop: Platform.OS === 'android' ? null : null,
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
