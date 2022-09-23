import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/layout/Header';

const ProductAllScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>ProductAllScreen</Text>
    </View>
  );
};

export default ProductAllScreen;

const styles = StyleSheet.create({});
