import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/layout/Header';
import Banner from '../../components/Foreground/Banner';
import ProductHome from './ProductHome';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getProduct} from '../../redux/actions/ProductAction';
import Loader from '../../components/Constants/Loader';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {allProducts, error, loading} = useSelector(state => state.productData);
  // console.log('allProducts->', allProducts);
  useEffect(() => {
    if (error) {
      // alert(error);
      console.log(error);
    }
    dispatch(getProduct());
  }, [dispatch, error]);
  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <View>
          <Header navigation={navigation} />

          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <Banner />
            <ProductHome
              loading={loading}
              error={error}
              allProducts={allProducts}
            />
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
