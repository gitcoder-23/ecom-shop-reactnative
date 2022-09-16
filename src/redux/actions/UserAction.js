import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const userLoginAction = createAsyncThunk(
  'user/login',
  async ({postLogin}) => {
    const response = await axios.post(
      'https://mern-nest-ecommerce.herokuapp.com/api/v2/login',
      postLogin,
    );
    console.log('respose-login->', response);
    return response.data;
  },
);
