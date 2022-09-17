import {createAsyncThunk} from '@reduxjs/toolkit';

import rootApi from '../../rootApi';

export const userLoginAction = createAsyncThunk(
  'user/login',
  async ({postLogin}) => {
    const response = await rootApi.post('/login', postLogin);
    console.log('respose-login->', response);
    return response.data;
  },
);
