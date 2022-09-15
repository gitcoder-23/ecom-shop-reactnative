import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/layout/Header';
import Banner from '../../components/Foreground/Banner';
import ProductHome from './ProductHome';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Header />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Banner />
        <ProductHome />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
