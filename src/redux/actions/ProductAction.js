import {createAsyncThunk} from '@reduxjs/toolkit';
import rootApi from '../../rootApi';

export const getProduct = createAsyncThunk(
  'product/get',
  async (keyword = '') => {
    try {
      // const response = await rootApi.get('/products');
      const response = await rootApi.get(`/products?keyword=${keyword}`);
      // console.log('response->', response);
      return response.data;
    } catch (error) {
      return error.response.data.message;
    }
  },
);

export const getFilteredProduct = createAsyncThunk(
  'product/filter/get',
  async keyword => {
    try {
      // console.log('keyword-->', keyword);
      const response = await rootApi.get(`/products?keyword=${keyword}`);
      // console.log('response-filter->', response);
      return response.data;
    } catch (error) {
      return error.response.data.message;
    }
  },
);

export const addWishlistProduct = createAsyncThunk(
  'wishlist/post',
  async ({postWish}) => {
    try {
      console.log('postWish-->', postWish);
      const response = await rootApi.post('/addToWishlist', postWish);
      console.log('response-wish->', response);
      return response.data;
    } catch (error) {
      console.log('response-error->', error);

      return error.response.data.message;
    }
  },
);

export const removeFromWishlist = createAsyncThunk(
  'wishlist/delete',
  async id => {
    try {
      console.log('id-->', id);
      const response = await rootApi.delete(`/removeWishlist/${id}`);
      console.log('response-remove->', response);
      return response.data;
    } catch (error) {
      return error.response.data.message;
    }
  },
);

export const getFromWishlist = createAsyncThunk('wishlist/get', async () => {
  try {
    const response = await rootApi.get('/wishlist');
    console.log('response-wishlist->', response);
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
});

// export const getProduct = () => async dispatch => {
//   try {
//     dispatch({
//       type: 'allProductRequest',
//     });
//     const {data} = await axios.get(
//       'https://mern-nest-ecommerce.herokuapp.com/api/v2/products',
//     );
//     dispatch({
//       type: 'allProductSuccess',
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: 'allProductFail',
//       payload: error.response.data.message,
//     });
//   }
// };
