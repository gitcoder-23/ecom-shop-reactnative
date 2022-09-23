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
      console.log('keyword-->', keyword);
      const response = await rootApi.get(`/products?keyword=${keyword}`);
      console.log('response-filter->', response);
      return response.data;
    } catch (error) {
      return error.response.data.message;
    }
  },
);

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
