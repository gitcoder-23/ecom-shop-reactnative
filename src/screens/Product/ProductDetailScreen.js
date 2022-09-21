/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../components/layout/Header';

const ProductDetailScreen = ({navigation, route}) => {
  const [productItem, setProductItem] = useState(route?.params?.productItem);
  useEffect(() => {
    setProductItem(route?.params?.productItem);
  }, []);

  console.log('productItem->', productItem);

  return (
    <View>
      <Header navigation={navigation} />
      <Text>ProductDetailScreen</Text>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
