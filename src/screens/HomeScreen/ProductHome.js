import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProduct} from '../../redux/actions/ProductAction';
import ProductCard from './ProductCard';

var {width} = Dimensions.get('window');

const ProductHome = () => {
  const dispatch = useDispatch();
  const {products, error, loading} = useSelector(state => state.products);
  console.log('products->', products);
  useEffect(() => {
    if (error) {
      alert(error);
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={{fontSize: 25, color: '#333', textAlign: 'center'}}>
            Best Selling
          </Text>
          <View style={styles.productCard}>
            {products &&
              products.map((pData, indx) => (
                <Fragment key={indx}>
                  <ProductCard id={pData._id} product={pData} indx={indx} />
                </Fragment>
              ))}
          </View>
        </View>
      )}
    </>
  );
};

export default ProductHome;

const styles = StyleSheet.create({
  container: {
    width: width,
    padding: 10,
    marginVertical: 10,
    marginBottom: width / 6 - 5,
  },
  productCard: {
    width: width * 1 - 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
