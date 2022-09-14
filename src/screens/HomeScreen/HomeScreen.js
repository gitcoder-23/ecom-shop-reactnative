import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/layout/Header';
import Banner from '../../components/Home/Banner';
import HomeProduct from './HomeProduct';

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Banner />
        <HomeProduct />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
