import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {useSelector} from 'react-redux';
import Header from '../../components/layout/Header';
import FilterProducts from './FilterProducts';

const ProductAllScreen = ({navigation}) => {
  const {allProducts, filterProducts} = useSelector(state => state.productData);

  return (
    <View>
      <Header navigation={navigation} />
      <FilterProducts
        navigation={navigation}
        allProducts={allProducts}
        filterProducts={filterProducts}
      />
    </View>
  );
};

export default ProductAllScreen;

const styles = StyleSheet.create({});
