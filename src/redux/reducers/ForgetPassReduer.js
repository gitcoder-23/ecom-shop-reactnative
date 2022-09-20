import {createReducer, createSlice} from '@reduxjs/toolkit';
import {userForgetPassAction} from '../actions/UserAction';

const initialState = {
  forgetPassItem: {},
  isForgetPassLoading: true,
  error: true,
  isSuccess: false,
  message: '',
  errorMessage: '',
};

const ForgetPassReducer = createSlice({
  name: 'forgetPassReducer',
  initialState: initialState,
  // action based reducers
  reducers: {},
  extraReducers: function (builder) {
    //user forgetpassword

    builder.addCase(userForgetPassAction.pending, state => {
      state.isForgetPassLoading = true;
    });
    builder.addCase(userForgetPassAction.fulfilled, (state, action) => {
      state.isForgetPassLoading = false;
      const newPayload = action.payload;
      if (newPayload) {
        state.error = false;
        state.forgetPassItem = newPayload;
        state.message = newPayload.message;
        state.errorMessage = 'Forgetpassword success';
      }
    });

    builder.addCase(userForgetPassAction.rejected, (state, action) => {
      state.isForgetPassLoading = false;
      state.error = true;
      state.message = '';
      state.errorMessage = 'Forgetpassword failed';
    });
  },
});

export default ForgetPassReducer.reducer;
