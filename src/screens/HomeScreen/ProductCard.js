/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  ToastAndroid,
  Platform,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  addWishlistProduct,
  removeFromWishlist,
} from '../../redux/actions/ProductAction';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import axios from 'axios';

var {width} = Dimensions.get('window');

const ProductCard = ({id, product, indx, navigation}) => {
  const dispatch = useDispatch();
  const {userItem, loginItem} = useSelector(state => state.userAuth);
  const {wishlistProduct} = useSelector(state => state.productData);
  const [click, setClick] = useState(false);
  const [wishData, setWishData] = useState('');
  const [touch, setTouch] = useState(false);
  // console.log('wishlistProduct->', wishlistProduct);

  const addWishlist = () => {
    // setClick(!click);
    setClick(true);
    setTouch(false);
    const postWish = {
      productName: product.name,
      quantity: 1,
      productImage: product.images[0].url,
      productPrice: product.price,
      userId: userItem.user._id,
      productId: product._id,
      Stock: product.Stock,
    };

    console.log('postWish->', postWish);

    console.log('wishlistData->', postWish);
    if (Platform.OS === 'android') {
      ToastAndroid.show(
        `${product.name} is added to wishlist`,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    } else {
      Alert.alert('', `${product.name} is added to wishlist`);
    }
    dispatch(addWishlistProduct({postWish}));
  };

  const removeWishlist = rData => {
    console.log('rData->', rData);
    // // setClick(!click);
    setClick(false);
    setTouch(true);
    let id = rData;
    dispatch(removeFromWishlist(id));

    if (Platform.OS === 'android') {
      ToastAndroid.show(
        `${product.name} removed from Wishlist`,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    } else {
      Alert.alert('', `${product.name} removed from Wishlist`);
    }
  };

  useEffect(() => {
    if (wishlistProduct && wishlistProduct.length > 0) {
      wishlistProduct.map(data => {
        setWishData(data);
        if (data.productId === product._id && touch === false) {
          setClick(true);
        }
      });
    }
  }, [dispatch, wishlistProduct, click]);

  console.log('click->', click);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('ProductDetails', {productItem: product})
        }>
        <View style={styles.ProductCard}>
          <Image source={{uri: product.images[0].url}} style={styles.image} />
          <View>
            <Text
              style={{color: '#333', paddingVertical: 5, textAlign: 'center'}}>
              {product.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              // justifyContent: 'center',
            }}>
            <View
              style={
                {
                  // flexDirection: 'row',
                  // alignItems: 'center',
                  // justifyContent: 'space-between',
                  // width: '100%',
                  // paddingBottom: 10,
                }
              }>
              <Text
                style={{color: '#333', paddingHorizontal: 10, fontSize: 16}}>
                $ {product.price}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  // alignItems: 'center',
                }}>
                <Icon name={'star'} color={'#C68600'} size={20} />
                <Text style={{color: '#333', paddingHorizontal: 5}}>
                  ( {product?.numOfReviews})
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: '#555',
                paddingHorizontal: 10,
                fontSize: 14,
                textDecorationLine: 'line-through',
                marginLeft: -5,
                marginTop: -5,
              }}>
              {/* $ {product.offerPrice} */}
              {product.offerPrice.length > 0 ? '$' + product.offerPrice : null}
              {/* {!product.offerPrice ? null : '$' + product.offerPrice} */}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                // justifyContent: 'flex-end',
                marginTop: 20,
              }}>
              {click ? (
                <TouchableOpacity onPress={() => removeWishlist(product._id)}>
                  <Icon name={'heart'} color={'crimson'} size={20} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={addWishlist}>
                  <Icon
                    name={'heart-outline'}
                    color={'#333'}
                    size={20}
                    // style={{marginRight: 10}}
                  />
                </TouchableOpacity>
              )}
              {product.Stock !== 0 ? (
                <TouchableOpacity>
                  <Icon
                    name={'cart-outline'}
                    color={'#333'}
                    size={20}
                    // style={{marginRight: 10}}
                  />
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
          {product.Stock === 0 ? (
            <View style={styles.outOfStock}>
              <Text style={{color: '#fff', fontSize: 10, textAlign: 'center'}}>
                Stock Limited
              </Text>
            </View>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    </>
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
    width: 45,
    height: 45,
    backgroundColor: 'red',
    borderRadius: 50,
    position: 'absolute',
    top: -10,
    left: -10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
