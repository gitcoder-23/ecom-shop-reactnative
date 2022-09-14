/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

var {width} = Dimensions.get('window');

const ProductCard = ({id, product, indx}) => {
  return (
    <View style={styles.ProductCard}>
      <Image source={{uri: product.images[0].url}} style={styles.image} />
      <View>
        <Text style={{color: '#333', paddingVertical: 5, textAlign: 'center'}}>
          {product.name}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          // justifyContent: 'center',
        }}>
        <Text style={{color: '#333', paddingHorizontal: 10, fontSize: 16}}>
          $ {product.price}
        </Text>
        <Text
          style={{
            color: '#555',
            paddingHorizontal: 10,
            fontSize: 14,
            textDecorationLine: 'line-through',
            marginLeft: -5,
            marginTop: -5,
          }}>
          {product.offerPrice}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <TouchableOpacity>
            <Icon
              name={'heart-outline'}
              color={'#333'}
              size={25}
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name={'cart-outline'}
              color={'#333'}
              size={25}
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  ProductCard: {
    width: width / 2 - 30,
    height: width / 1.7,
    borderRadius: 10,
    elevation: 8,
    backgroundColor: '#e5e5e5',
    flexWrap: 'wrap',
    margin: 10,
    // flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: width / 2 - 60,
    resizeMode: 'contain',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  outOfStock: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 50,
    position: 'absolute',
    top: -10,
    left: -10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
