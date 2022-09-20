import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import rootApi from '../../rootApi';

export const userLoginAction = createAsyncThunk(
  'user/login',
  async ({postLogin}) => {
    const response = await rootApi.post('/login', postLogin);
    // console.log('respose-login->', response);
    return response.data;
  },
);

export const userSignupAction = createAsyncThunk(
  'user/signup',
  async postSignup => {
    const response = await rootApi.post('/registration', postSignup);
    console.log('respose-sigup->', response);
    return response.data;
  },
);

export const userDataAction = createAsyncThunk('user/data/get', async () => {
  const response = await rootApi.get('/me');
  // console.log('respose-userData->', response);
  return response.data;
});

export const userForgetPassAction = createAsyncThunk(
  'user/forgetpass',
  async postForgetPass => {
    console.log('postForgetPass', postForgetPass);
    const response = await rootApi.post('/password/forgot', postForgetPass);
    // console.log('respose-forgetpass->', response);
    return response.data;
  },
);
