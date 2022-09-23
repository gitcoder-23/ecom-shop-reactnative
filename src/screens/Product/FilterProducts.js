import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import ProductList from './ProductList';
import ProductCard from '../HomeScreen/ProductCard';

var {width} = Dimensions.get('window');

const categories = [
  {
    id: 1,
    category: 'All',
  },
  {
    id: 2,
    category: 'Personal',
  },
  {
    id: 3,
    category: 'cloth',
  },
  {
    id: 4,
    category: 'Ladies Cloth',
  },
  {
    id: 5,
    category: 'Gift',
  },
  {
    id: 6,
    category: 'Food',
  },
  {
    id: 7,
    category: 'Electronics',
  },
  {
    id: 8,
    category: 'Sports',
  },
];

const FilterProducts = ({navigation, allProducts, filterProducts}) => {
  // const dispatch = useDispatch();
  // const {allProducts, FilterProducts} = useSelector(state => state.productData);
  const [active, setActive] = useState('All');
  const [data, setData] = useState(allProducts);

  const productsFilter = activeData => {
    // if (activeData !== 'All') {
    //   console.log('All-->', activeData);
    //   const newFilData = allProducts.products.filter((item, indx) => {
    //     console.log('item->', item);
    //   });
    // }

    if (activeData !== 'All') {
      setData([
        ...allProducts.products.filter(item => item.category === activeData),
      ]);
    } else {
      setData(allProducts);
    }
    setActive(activeData);
  };
  // console.log('allProducts->', allProducts);
  // console.log('data->', data);

  return (
    <View>
      <ScrollView
        style={{
          flexDirection: 'row',
          marginVertical: 10,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {categories.map((i, index) => (
          <TouchableOpacity
            onPress={() => productsFilter(i.category)}
            style={[styles.name, active === i.category && styles.nameActive]}
            key={index}>
            <Text style={{color: '#fff'}}>{i.category}</Text>
          </TouchableOpacity>
        ))}
        {/* {allProducts.products.map((i, index) => (
          <TouchableOpacity
            onPress={() => productsFilter(i.category)}
            style={[styles.name, active === i.category && styles.nameActive]}
            key={index}>
            <Text style={{color: '#fff'}}>{i.category}</Text>
          </TouchableOpacity>
        ))} */}
      </ScrollView>
      <View style={styles.productCard}>
        {data?.length === 0 && !data?.products ? (
          <Text style={{color: '#000', marginTop: 100, fontSize: 16}}>
            No Products Found!
          </Text>
        ) : (
          <>
            {data && data?.products
              ? data?.products.map((product, indx) => {
                  return (
                    <Fragment key={indx}>
                      <ProductList
                        id={product._id}
                        product={product}
                        navigation={navigation}
                      />
                    </Fragment>
                  );
                })
              : data?.map((product, indx) => {
                  return (
                    <Fragment key={indx}>
                      {/* <ProductList
                        id={product._id}
                        product={product}
                        navigation={navigation}
                      /> */}
                      <ProductCard
                        id={product._id}
                        product={product}
                        navigation={navigation}
                      />
                    </Fragment>
                  );
                })}
          </>
        )}
      </View>
    </View>
  );
};

export default FilterProducts;

const styles = StyleSheet.create({
  name: {
    borderRadius: 15,
    backgroundColor: 'crimson',
    marginHorizontal: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  nameActive: {
    backgroundColor: '#000',
  },
  productCard: {
    width: width * 1 - 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
